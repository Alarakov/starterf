import cssnanoPlugin from "cssnano"
import postCssPresetEnvPlugin from "postcss-preset-env"
import autoprefixer from "autoprefixer"

const config = {
	plugins: [postCssPresetEnvPlugin({}), cssnanoPlugin({}), autoprefixer({})],
}

export default config
