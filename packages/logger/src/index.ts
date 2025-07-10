import { LogLevels, createConsola } from 'consola';
import { isProduction } from 'std-env';

export const logger = createConsola({
    level: isProduction ? LogLevels.info : LogLevels.verbose,
    formatOptions: {
        columns: isProduction ? 120 : undefined,
        colors: true,
        compact: false,
        date: true,
    },
});
