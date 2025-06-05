import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
/** @type {import('./env.ts')} */
const { env } = createJiti(fileURLToPath(import.meta.url))('./env');

/** @type {import('next').NextConfig} */
const config = {
    output: env.DOCKER ? 'standalone' : undefined,
    reactStrictMode: true,

    /** Enables hot reloading for local packages without a build step */
    transpilePackages: ['@bean/logger', '@bean/ui', '@bean/validators'],

    /** We already do linting and typechecking as separate tasks in CI */
    typescript: { ignoreBuildErrors: true },
};

export default config;
