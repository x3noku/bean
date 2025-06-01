import { z } from 'zod';

export const envModeSchema = z.enum(['development', 'production', 'test']).default('development');

export type EnvModeSchema = typeof envModeSchema;
