const vueLoader = require('vue-loader')

module.exports = {
  components: [
    'src/components/Component2/Component2.vue',
    'src/components/Component3/Component3.vue'
  ],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.vue$/,
					loader: 'vue-loader'
				},
				{
					test: /\.js?$/,
					exclude: modulePath =>
						/node_modules/.test(modulePath) &&
						!/node_modules[\\/]regexpu-core/.test(modulePath) &&
						!/node_modules[\\/]unicode-match-property-ecmascript/.test(modulePath) &&
						!/node_modules[\\/]unicode-match-property-value-ecmascript/.test(modulePath) &&
						!/node_modules[\\/]acorn-jsx/.test(modulePath) &&
						!/node_modules[\\/]@znck[\\/]prop-types/.test(modulePath),
					use: {
						loader: 'babel-loader',
						options: {
							sourceType: 'unambiguous',
							presets: [
								[
									'@babel/preset-env',
									{
										useBuiltIns: 'usage',
										corejs: 2,
										targets: {
											ie: '11'
										}
									}
								]
							],
							comments: false
						}
					}
				}
			]
		},

		plugins: [new vueLoader.VueLoaderPlugin()]
	}
}
