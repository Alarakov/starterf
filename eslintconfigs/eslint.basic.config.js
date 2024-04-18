import js from "@eslint/js"

import { loadPlugin } from "./eslint.plugins.helper.js"
const promiseConfigs = loadPlugin("plugin:promise/recommended")
export const jsEsLintConfig = {
	name: "BasicJsConfig",
	rules: {
		...js.configs.recommended.rules,
		...promiseConfigs.rules,
	},
	plugins: { ...promiseConfigs.plugins },
}
