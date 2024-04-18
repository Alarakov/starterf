import prettierRecomended from "eslint-plugin-prettier/recommended"
export const prettierESLintConfig = {
	name: "Prettier",
	...prettierRecomended,
	ignores: ["eslintconfigs/**"],
	rules: { "prettier/prettier": ["warn"] },
}
