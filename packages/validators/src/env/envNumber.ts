import { z } from 'zod';

export const envNumberSchema = z.coerce.number();

export type EnvNumberSchema = typeof envNumberSchema;
