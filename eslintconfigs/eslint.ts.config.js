import tselint from "typescript-eslint"
import { mergeConfigs } from "./eslint.plugins.helper.js"
export const eslintTSConfig = {
	...mergeConfigs(tselint.configs.recommended),
	rules: {
		...mergeConfigs(tselint.configs.recommended).rules,
		"@typescript-eslint/no-unused-vars": ["off"],
	},
}
