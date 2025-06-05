import { createEnv } from '@t3-oss/env-core';
import { envBooleanOptionalSchema, envNodeEnvSchema, envUrlSchema } from '@bean/validators/env';
import z from 'zod';

export const env = createEnv({
    server: {
        /* Node */
        NODE_ENV: envNodeEnvSchema,
        DOCKER: envBooleanOptionalSchema,

        /* Database */
        DATABASE_URL: envUrlSchema,

        /* Auth */
        BETTER_AUTH_SECRET:
            process.env.NODE_ENV === envNodeEnvSchema._def.innerType.enum.production
                ? z.string()
                : z.string().optional(),
        BETTER_AUTH_URL:
            process.env.NODE_ENV === envNodeEnvSchema._def.innerType.enum.production
                ? envUrlSchema
                : envUrlSchema.optional(),

        /* Cors */
        CORS_ORIGIN: z.string().default(''),
    },
    runtimeEnv: process.env,
    skipValidation: !!process.env.CI || process.env.npm_lifecycle_event === 'lint',
    emptyStringAsUndefined: true,
});
