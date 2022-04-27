const path = require('path')

const vueConfig = {
	css: {
		loaderOptions: {
			less: {
				lessOptions: {
					javascriptEnabled: true
				}
			}
		}
	},
	pluginOptions: {
		"style-resources-loader": {
			preProcessor: "less",
			patterns: [
				// 引入全局主题，这样就不用每个页面都引入了
				path.resolve(__dirname, "./src/assets/global.less"),
			],
		},
	},
}

module.exports = vueConfig;
