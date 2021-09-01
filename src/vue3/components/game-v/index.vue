<template lang="pug">
game-bg
	game-waiting(v-if="game.status === 'WAITING' || game.status === 'END'")
	game-playing(v-if="game.status === 'PLAYING'")
game-tool
game-log
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import Game from '@/core/Game'
import gamePlaying from '@/vue3/components/game-playing/index.vue'
import gameWaiting from '@/vue3/components/game-waitting/index.vue'
import gameBg from '@/vue3/components/game-bg/index.vue'
import gameLog from '@/vue3/components/game-log/index.vue'
import gameTool from '@/vue3/components/game-tool/index.vue'

export default defineComponent({
	name: 'game-v',
	components: {
		gamePlaying,
		gameWaiting,
		gameBg,
		gameLog,
		gameTool,
	},
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		onMounted(() => {
			state.game.init({ width: 1000, height: 600 })
			window.game = state.game
		})

		return {
			...toRefs(state),
		}
	},
})
</script>
