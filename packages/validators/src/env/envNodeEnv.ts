import { z } from 'zod';

export const envNodeEnvSchema = z.enum(['development', 'production', 'test']).default('development');

export type EnvNodeEnvSchema = typeof envNodeEnvSchema;
