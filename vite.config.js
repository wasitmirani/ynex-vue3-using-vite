import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        vue(),
        VitePWA(),
        laravel({
            input: [
                // 'resources/css/app.css',
                'resources/ts/app.ts',
            ],
            refresh: true,
        }),
    ],
    assetsInclude: ['**/*.js', '**/*.css'],
});
