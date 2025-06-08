import { createEnv } from '@t3-oss/env-nextjs';
import { envBooleanOptionalSchema, envNodeEnvSchema, envUrlSchema } from '@bean/validators/env';

export const env = createEnv({
    shared: {
        /* Docker */
        DOCKER: envBooleanOptionalSchema,

        /* Node */
        NODE_ENV: envNodeEnvSchema,
    },
    server: {},
    client: {
        /* API */
        NEXT_PUBLIC_SERVER_URL: envUrlSchema,
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
