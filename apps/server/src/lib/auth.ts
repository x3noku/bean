import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { env } from '~/env';
import { db } from '../db';
import * as schema from '../db/schema/auth';

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: 'pg',

        schema: schema,
    }),
    secret: env.BETTER_AUTH_SECRET,
    baseURL: env.BETTER_AUTH_URL,
    trustedOrigins: [env.CORS_ORIGIN],
    emailAndPassword: {
        enabled: true,
    },
});
