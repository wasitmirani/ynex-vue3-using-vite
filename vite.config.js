import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    // scripts: [
    //     '/assets/libs/%40popperjs/core/umd/popper.min.js',
    //     '/assets/libs/bootstrap/js/bootstrap.bundle.min.js',
    //     '/assets/js/defaultmenu.min.js',
    //     '/assets/libs/node-waves/waves.min.js',
    //     '/assets/js/sticky.js',
    //     '/assets/libs/simplebar/simplebar.min.js',
    //     '/assets/js/simplebar.js',
    //     '/assets/libs/%40simonwep/pickr/pickr.es5.min.js',
    //     '/assets/libs/jsvectormap/js/jsvectormap.min.js',
    //     '/assets/libs/jsvectormap/maps/world-merc.js',
    //     '/assets/libs/apexcharts/apexcharts.min.js',
    //     '/assets/libs/chart.js/chart.min.js',
    //     '/assets/js/crm-dashboard.js',
    //     '/assets/js/custom-switcher.min.js',
    //     '/assets/js/custom.js',
    //   ],
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
