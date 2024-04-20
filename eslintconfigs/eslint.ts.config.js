import tselint from "typescript-eslint"
import { mergeConfigs, loadPlugin } from "./eslint.plugins.helper.js"
const TSAibrnbConfig = loadPlugin("eslint-config-airbnb-typescript")
export const eslintTSConfig = {
	...mergeConfigs(tselint.configs.recommended),

	languageOptions: {
		...mergeConfigs(tselint.configs.recommended).languageOptions,
		parserOptions: {
			project: "./tsconfig.json",
		},
	},
	rules: {
		...mergeConfigs(tselint.configs.recommended).rules,

		...TSAibrnbConfig.rules,
		"@typescript-eslint/no-unused-vars": ["off"],
		"@typescript-eslint/semi": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/quotes": "off",
		"@typescript-eslint/ban-types": ["off"],
	},
}
