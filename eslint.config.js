// @ts-check
import globals from "globals"
import {
	prettierESLintConfig,
	jsEsLintConfig,
	eslintTSConfig,
	reactESLintConfig,
} from "./eslintconfigs/index.js"

const eslintConfig = [
	{
		ignores: ["dist/**/*", "eslint.config.js", "node_modules/**/*"],
	},
	{
		files: ["src/**/*.ts", "src/**/*.tsx"],
		...jsEsLintConfig,
		languageOptions: {
			globals: {
				...globals.browser,
			},
		},
	},

	eslintTSConfig,

	{
		files: ["src/**/*.ts", "src/**/*.tsx"],
		...prettierESLintConfig,
	},
	{
		...reactESLintConfig,
	},
]

export default eslintConfig
