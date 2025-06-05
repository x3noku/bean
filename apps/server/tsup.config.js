import { fileURLToPath } from 'node:url';
import createJiti from 'jiti';
import { defineConfig } from 'tsup';

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
/** @type {import('./env.ts')} */
const { env } = createJiti(fileURLToPath(import.meta.url))('./env');

console.log(env.NODE_ENV);

export default defineConfig({
    entry: ['src/**/*'],
    outDir: 'dist/src/', // Save `src/` directory to satisfy TypeScript project references feature

    format: ['esm'],
    clean: true,
    bundle: true,

    dts: {
        compilerOptions: {
            composite: false,
        },
    },
});
