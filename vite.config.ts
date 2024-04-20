import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"
import VitePluginBrowserSync from "vite-plugin-browser-sync"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr(), VitePluginBrowserSync()],
	resolve: {
		alias: {
			components: "/src/components",
			assets: "src/assets",
			hooks: "src/hooks",
			helpers: "src/helpers",
			layout: "src/layout",
			pages: "src/pages",
			store: "src/store",
			types: "src/types",
			styles: "src/styles",
		},
	},
})
