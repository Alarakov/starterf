import js from "@eslint/js"

import { loadPlugin } from "./eslint.plugins.helper.js"
const promiseConfigs = loadPlugin("plugin:promise/recommended")
const airbnbConfigRules = loadPlugin("eslint-config-airbnb")
const importConfig = loadPlugin("plugin:import/recommended")
export const jsEsLintConfig = {
	name: "BasicJsConfig",
	rules: {
		...js.configs.recommended.rules,
		...promiseConfigs.rules,
		...airbnbConfigRules.rules,
		...importConfig.rules,
		"dot-notation": ["off"],
		"import/no-unresolved": "off",
	},
	plugins: { ...promiseConfigs.plugins, ...importConfig.plugins },
}
