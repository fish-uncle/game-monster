/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ConfigVisualizerConfig } from './visualizer'
import { ConfigProgressPlugin } from './progress'
import legacy from '@vitejs/plugin-legacy'

export function createVitePlugins() {
	const vitePlugins: (PluginOption | PluginOption[])[] = [
		// vue支持
		vue(),
		legacy({
			targets: ['ie >= 11'],
			additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
		}),
	]

	// 构建时显示进度条
	vitePlugins.push(ConfigProgressPlugin())

	// rollup-plugin-visualizer
	vitePlugins.push(ConfigVisualizerConfig())

	return vitePlugins
}
