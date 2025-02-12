import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		plugins: [react()],
		server: {
			proxy: {
				// Proxy requests starting with '/api' to your backend server
				"/api": {
					target: "http://localhost:5000/", // Your backend server URL
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""), // Remove `/api` prefix when forwarding to the backend
				},
			},
		},
		optimizeDeps: {
			include: ["@emailjs/browser"],
		},
	};
});
