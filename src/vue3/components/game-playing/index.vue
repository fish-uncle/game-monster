<template lang="pug">
.game-start-bg.pos-a
	game-player(v-if="game.currentPlayer", :x="game.currentPlayer.x", :y="game.currentPlayer.y", @walk-stop="walkStop")
	game-monster(v-for="item in game.monsterList", v-bind="item", :key="item.id")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Game from '@/core/Game'
import gamePlayer from '@/vue3/components/game-player/index.vue'
import gameMonster from '@/vue3/components/game-monster/index.vue'

export default defineComponent({
	name: 'game-playing',
	components: { gamePlayer, gameMonster },
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
