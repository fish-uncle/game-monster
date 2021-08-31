<template lang="pug">
.game-start-bg.pos-a
	player(v-if="game.currentPlayer", :x="game.currentPlayer.x", :y="game.currentPlayer.y", @walk-stop="walkStop")
	monster(v-for="item in game.monsterList", v-bind="item", :key="item.id")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Game from '@/core/Game'
import player from '@/vue3/components/player/index.vue'
import monster from '@/vue3/components/monster/index.vue'

export default defineComponent({
	name: 'game-playing',
	components: { player, monster },
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		const walkStop = ({ x, y }) => {
			state.game.currentPlayer.x = x
			state.game.currentPlayer.y = y
		}

		return {
			...toRefs(state),
			walkStop,
		}
	},
})
</script>
<style lang="scss" scoped>
.game-start-bg {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
</style>
