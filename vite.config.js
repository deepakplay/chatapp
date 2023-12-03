import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/App.jsx',
            refresh: true,
        }),
        react(),
        svgr(),
        eslint()
    ],
    build: {
        manifest: 'manifest.json',
        commonjsOptions: {
            transformMixedEsModules: true
        }
    }
});
