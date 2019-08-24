const path = require('path'); // require - CommonJS(자바스크립트의 모듈을 정의한 스펙)
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin()
	]
}