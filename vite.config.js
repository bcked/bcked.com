import { sveltekit } from '@sveltejs/kit/vite';

export default {
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/variables.scss" as *;'
            }
        }
    }
};