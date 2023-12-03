import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";
import path from "path";

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
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./resources/js/"),
            components: path.resolve(__dirname, "./resources/js/components"),
            hooks: path.resolve(__dirname, "./resources/js/hooks"),
            pages: path.resolve(__dirname, "./resources/js/pages"),
            routes: path.resolve(__dirname, "./resources/js/routes"),
            store: path.resolve(__dirname, "./resources/js/store"),
            utils: path.resolve(__dirname, "./resources/js/utils"),
        }

    }
});
