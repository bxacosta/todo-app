import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {configDefaults} from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        global: true,
        environment: 'jsdom',
        setupFiles: './tests/setup.js',
        exclude: [
            ...configDefaults.exclude,
            'e2e/*'
        ]
    }
})
