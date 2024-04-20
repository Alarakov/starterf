// @ts-check
import globals from "globals"
import {
	jsEsLintConfig,
	eslintTSConfig,
	reactESLintConfig,
	eslintFileNamesConfig,
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
		...reactESLintConfig,
	},
	eslintFileNamesConfig,
]

export default eslintConfig
