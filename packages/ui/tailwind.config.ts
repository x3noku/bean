import web from '@bean/tailwind-config/web';
import type { Config } from 'tailwindcss';

const config = {
    content: web.content,
    presets: [web],
} satisfies Config;

export default config;
