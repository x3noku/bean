import { createEnv } from '@t3-oss/env-nextjs';
import { envBooleanOptionalSchema, envNodeEnvSchema, envUrlSchema } from '@bean/validators/env';

export const env = createEnv({
    shared: {
        /* Node */
        NODE_ENV: envNodeEnvSchema,
        DOCKER: envBooleanOptionalSchema,
    },
    server: {},
    client: {
        /* API */
        NEXT_PUBLIC_SERVER_URL: envUrlSchema,
    },
    experimental__runtimeEnv: {
        /* Node */
        NODE_ENV: process.env.NODE_ENV,
        DOCKER: process.env.DOCKER,

        /* API */
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    },
    skipValidation: !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
    emptyStringAsUndefined: true,
});
