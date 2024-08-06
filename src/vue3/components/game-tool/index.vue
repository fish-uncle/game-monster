<template>
	<ul class="tool fn-flex" :style="{ width: `${game.width}px` }">
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="log"
		>
			属性
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="openStore"
		>
			商店
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="createMonster"
		>
			创建怪物
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: game.currentPlayer || game.status === 'WAITING' }"
			@click="createPlayer"
		>
			创建角色
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="removePlayer"
		>
			删除角色
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="save"
		>
			存档
		</li>
		<li
			class="fn-flex cursor-pointer"
			:class="{ disabled: !game.currentPlayer || game.status === 'WAITING' }"
			@click="read"
		>
			读档
		</li>
	</ul>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Game from '@/core/Game'
import createPlayer from './createPlayer'
import openStore from './openStore'
import createMonster from './createMonster'
import removePlayer from './removePlayer'
import log from './log'
import save from './save'
import read from './read'

defineOptions({
	name: 'GameTool',
})

const game: Ref<Game> = ref(Game.Instance())
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
