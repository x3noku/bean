import type { Config } from 'tailwindcss';

import base from './base';

const config: Config = {
    content: base.content,
    presets: [base],
    theme: {},
};

export default config;
