import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod/v4';

export const env = createEnv({
    shared: {
        /* Docker */
        DOCKER: z.stringbool().optional(),

        /* Node */
        NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
    },
    server: {},
    client: {
        /* API */
        NEXT_PUBLIC_SERVER_URL: z.url(),
    },
    experimental__runtimeEnv: {
        /* Docker */
        DOCKER: process.env.DOCKER,

        /* Node */
        NODE_ENV: process.env.NODE_ENV,

        /* API */
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    },
    skipValidation: !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
    emptyStringAsUndefined: true,
});
