import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const PUBLIC_HOST = 'yuriko-preneuralgic-memphis.ngrok-free.dev'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,           // слушать на 0.0.0.0 (доступ извне)
        port: 5173,
        strictPort: true,
        allowedHosts: [PUBLIC_HOST], // разрешаем ngrok-хост
        hmr: {
            host: PUBLIC_HOST,  // чтобы HMR подключался к тому же хосту
            protocol: 'wss',
            port: 443
        }
    }
})
