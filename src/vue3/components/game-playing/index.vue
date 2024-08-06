<template>
	<div class="game-start-bg pos-a">
		<game-player
			v-if="game.currentPlayer"
			:x="game.currentPlayer.x"
			:y="game.currentPlayer.y"
			@walk-stop="walkStop"
		></game-player>
		<game-monster v-for="item in game.monsterList" v-bind="item" :key="item.id"></game-monster>
	</div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Game from '@/core/Game'
import gamePlayer from '@/vue3/components/game-player/index.vue'
import gameMonster from '@/vue3/components/game-monster/index.vue'

defineOptions({
	name: 'GamePlaying',
})
const game: Ref<Game> = ref(Game.Instance())

const walkStop = ({ x, y }) => {
	if (game.value) {
		if (game.value.currentPlayer) {
			game.value.currentPlayer.x = x
			game.value.currentPlayer.y = y
		}
	}
}
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
