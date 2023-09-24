import { resolve } from 'path';

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                projects: resolve(__dirname, 'projects/index.html'),
                contacts: resolve(__dirname, 'contacts/index.html')
            }
        }
    }
}