<template>
	<game-bg>
		<game-waiting v-if="game.status === 'WAITING' || game.status === 'END'"></game-waiting>
		<game-playing v-if="game.status === 'PLAYING'"></game-playing>
	</game-bg>
	<game-tool></game-tool>
	<game-log></game-log>
</template>
<script lang="ts" setup>
import { onMounted, ref, Ref } from 'vue'
import Game from '@/core/Game'
import gamePlaying from '@/vue3/components/game-playing/index.vue'
import gameWaiting from '@/vue3/components/game-waiting/index.vue'
import gameBg from '@/vue3/components/game-bg/index.vue'
import gameLog from '@/vue3/components/game-log/index.vue'
import gameTool from '@/vue3/components/game-tool/index.vue'

const game: Ref<Game> = ref(Game.Instance())

defineOptions({
	name: 'GameV',
})

onMounted(() => {
	if (game.value) {
		game.value.init({ width: 1000, height: 600 })
		window.game = game.value
	}
})
</script>
