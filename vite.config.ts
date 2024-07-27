import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import autoprefixer from 'autoprefixer'
import { createVitePlugins } from './build/plugins'

const resolve = (p: string) => path.resolve(__dirname, p)
export default ({ mode }) => {
	const __DEV__ = mode === 'development'
	return defineConfig({
		base: __DEV__ ? './' : '/',
		plugins: [...createVitePlugins()],
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
