import checkFile from "eslint-plugin-check-file"

export const eslintFileNamesConfig = {
	files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx,scss}"],
	name: "EslintFileNameConfig",
	plugins: {
		"check-file": checkFile,
	},
	rules: {
		"check-file/filename-naming-convention": [
			"error",
			{
				"src/components/**/*.tsx":
					"[a-z0-9]+(?:-[a-z0-9]+).component|[a-z0-9]+.component",
				"src/helpers/**/*.ts": "KEBAB_CASE",
				"src/pages/**/*.tsx": "[a-z0-9]+(?:-[a-z0-9]+).page|[a-z0-9]+.page",
				"src/layout/**/*.tsx":
					"[a-z0-9]+(?:-[a-z0-9]+).layout|[a-z0-9]+.layout",
				"src/hooks/**/*.ts": "use[A-Z][a-zA-Z]*",
				"src/types/**/*.ts": "KEBAB_CASE",
				"src/components/**/*.scss":
					"[a-z0-9]+(?:-[a-z0-9]+).module|[a-z0-9]+.module",
				"src/pages/**/*.scss":
					"[a-z0-9]+(?:-[a-z0-9]+).module|[a-z0-9]+.module",
				"src/layout/**/*.scss":
					"[a-z0-9]+(?:-[a-z0-9]+).module|[a-z0-9]+.module",
			},
			{
				errorMessage:
					'The file "{{ target }}" does not match file naming convention defined for this project, see contribute.md for details',
			},
		],
		"check-file/folder-naming-convention": [
			"error",
			{
				"src/components/**/": "KEBAB_CASE",
				"src/helpers/**/": "KEBAB_CASE",
				"src/pages/**/": "KEBAB_CASE",
				"src/layout/**/": "KEBAB_CASE",
				"src/hooks/**/": "KEBAB_CASE",
				"src/store/**/": "KEBAB_CASE",
				"src/types/**/": "KEBAB_CASE",
			},
		],
	},
}
