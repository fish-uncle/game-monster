import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import autoprefixer from 'autoprefixer'
import legacy from '@vitejs/plugin-legacy'

const resolve = (p: string) => path.resolve(__dirname, p)
export default () => {
	return defineConfig({
		base: './',
		plugins: [
			vue(),
			legacy({
				targets: ['ie >= 11'],
				additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
			}),
		],
		resolve: {
			alias: {
				'@': resolve('src'),
			},
		},
		server: {
			port: 2000,
			host: '0.0.0.0',
		},
		css: {
			postcss: {
				plugins: [
					autoprefixer({
						overrideBrowserslist: [
							'Android 4.1',
							'iOS 7.1',
							'Chrome > 31',
							'ff > 31',
							'ie >= 8',
							'last 10 versions', // 所有主流浏览器最近10版本用
						],
						grid: true,
					}),
				],
			},
		},
	})
}
