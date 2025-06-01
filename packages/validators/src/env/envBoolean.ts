import { z } from 'zod';

export const envBooleanSchema = z
    .union([z.string(), z.boolean()])
    .refine(value => typeof value === 'boolean' || ['true', 'false', '0', '1'].includes(value))
    .transform(value => {
        switch (value) {
            case true:
            case 'true':
            case '1':
                return true;
            default:
                return false;
        }
    })
    .pipe(z.boolean());

export type EnvBooleanSchema = typeof envBooleanSchema;
