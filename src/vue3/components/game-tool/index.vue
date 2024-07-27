<template lang="pug">
ul.tool.fn-flex(:style="style")
	li.fn-flex.cursor-pointer(@click="log", :class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 属性
	li.fn-flex.cursor-pointer(@click="openStore", :class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 商店
	li.fn-flex.cursor-pointer(
		@click="createMonster",
		:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 创建怪物
	li.fn-flex.cursor-pointer(
		@click="createPlayer",
		:class="{ disabled: game.currentPlayer || game.status === 'WAITING' }") 创建角色
	li.fn-flex.cursor-pointer(
		@click="removePlayer",
		:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 删除角色
	li.fn-flex.cursor-pointer(@click="save", :class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 存档
	li.fn-flex.cursor-pointer(@click="read", :class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }") 读档
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import Game from '@/core/Game'
import createPlayer from './createPlayer'
import openStore from './openStore'
import createMonster from './createMonster'
import removePlayer from './removePlayer'
import log from './log'
import save from './save'
import read from './read'

export default defineComponent({
	name: 'game-tool',
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		const style = computed(() => {
			return {
				width: state.game.width + 'px',
			}
		})

		return {
			...toRefs(state),
			style,
			createPlayer,
			removePlayer,
			openStore,
			createMonster,
			log,
			save,
			read,
		}
	},
})
</script>
<style lang="scss" scoped>
.tool {
	align-items: center;
	height: 50px;
	li {
		flex: 1;
		justify-content: center;
		&.disabled {
			color: #ddd;
			cursor: no-drop !important;
		}
	}
}
</style>
