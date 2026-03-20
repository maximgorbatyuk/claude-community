// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://claude-community.kz',
    trailingSlash: 'always',
    // Custom vite cache dir — default node_modules/.vite is root-owned on this machine
    vite: {
        cacheDir: './.vite-cache',
    },
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru', 'en', 'kk'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
