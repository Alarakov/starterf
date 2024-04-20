import react from "eslint-plugin-react"
import reactRecommended from "eslint-plugin-react/configs/recommended.js"
import { loadPlugin } from "./eslint.plugins.helper.js"

const reactHookRules = loadPlugin("plugin:react-hooks/recommended")
const jsxRunTime = loadPlugin("plugin:react/jsx-runtime")
export const reactESLintConfig = {
	name: "React-eslint",
	files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
	settings: {
		react: {
			version: "detect",
		},
	},
	...reactRecommended,

	languageOptions: {
		...reactRecommended.languageOptions,
		...jsxRunTime.languageOptions,
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	plugins: {
		...reactHookRules.plugins,
		...jsxRunTime.plugins,
		react,
	},
	rules: {
		...reactRecommended.rules,
		...jsxRunTime.rules,
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "off",
		"react/boolean-prop-naming": [
			"error",
			{
				rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+",
				message: "Boolean prop names must start with 'is' or 'has'",
			},
		],
		"react/function-component-definition": [
			2,
			{ namedComponents: "arrow-function" },
		],
		"import/no-default-export": "off",
		"import/prefer-default-export": "error",
		"import/order": [
			"error",
			{
				groups: [
					["builtin", "external"],
					"internal",
					["sibling", "parent", "index"],
				],
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		...reactHookRules.rules,
		"react/jsx-pascal-case": [
			"error",
			{
				allowAllCaps: true,
				ignore: [],
			},
		],
	},
}
