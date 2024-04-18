import cssnanoPlugin from "cssnano"
import postCssPresetEnvPlugin from "postcss-preset-env"

const config = {
	plugins: [postCssPresetEnvPlugin({}), cssnanoPlugin({})],
}

export default config
