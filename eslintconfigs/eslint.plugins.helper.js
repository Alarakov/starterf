import { FlatCompat } from "@eslint/eslintrc"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})
export const loadPlugin = (src) => {
	return compat.extends(src)[0]
}
export const mergeConfigs = (configs) => {
	const mergedConfig = {}
	configs.forEach((config) => {
		Object.assign(mergedConfig, config)
	})
	return mergedConfig
}
