import { serve } from '@hono/node-server';
import { RPCHandler } from '@orpc/server/fetch';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { env } from '~/env';
import { auth } from './lib/auth';
import { createContext } from './lib/context';
import { appRouter } from './routers/index';

const app = new Hono();

app.use(logger());
app.use(
    '/*',
    cors({
        origin: env.CORS_ORIGIN,
        allowMethods: ['GET', 'POST', 'OPTIONS'],
        allowHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    }),
);

app.on(['POST', 'GET'], '/api/auth/**', c => auth.handler(c.req.raw));

const handler = new RPCHandler(appRouter);
app.use('/rpc/*', async (c, next) => {
    const context = await createContext({ context: c });
    const { matched, response } = await handler.handle(c.req.raw, {
        prefix: '/rpc',
        context: context,
    });
    if (matched) {
        return c.newResponse(response.body, response);
    }
    await next();
});

app.get('/', c => {
    return c.text('OK');
});

serve(
    {
        fetch: app.fetch,
        port: 3000,
    },
    info => {
        console.log(`Server is running on http://localhost:${info.port}`);
    },
);
