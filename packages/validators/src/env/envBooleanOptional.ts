import { z } from 'zod';

export const envBooleanOptionalSchema = z
    .union([z.string(), z.boolean()])
    .optional()
    .refine(value => typeof value === 'boolean' || ['true', 'false', '0', '1', '', undefined].includes(value))
    .transform(value => {
        switch (value) {
            case true:
            case 'true':
            case '1':
                return true;
            case false:
            case 'false':
            case '0':
                return false;
            default:
                return undefined;
        }
    })
    .pipe(z.boolean().optional());

export type EnvBooleanOptionalSchema = typeof envBooleanOptionalSchema;
