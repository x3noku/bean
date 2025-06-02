import web from '@bean/tailwind-config/web';
import type { Config } from 'tailwindcss';

const config: Config = {
    content: web.content,
    presets: [web],
};

export default config;
