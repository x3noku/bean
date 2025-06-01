import { z } from 'zod';

export const envUrlSchema = z.string().url();

export type EnvUrlSchema = typeof envUrlSchema;
