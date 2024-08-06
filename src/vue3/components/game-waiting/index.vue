<template>
	<div class="game-no-start-bg pos-a fn-flex">
		<div class="game-start-container">
			<div class="game-start-btn pos-a cursor-pointer" @click="start">开始</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Game from '@/core/Game'

defineOptions({
	name: 'GameWaiting',
})
const game: Ref<Game> = ref(Game.Instance())

const start = () => {
	if (game.value) {
		game.value.start()
	}
}
</script>
<style lang="scss" scoped>
.game-start-btn {
	font-size: 20px;
	color: #fff;
	&:hover {
		opacity: 0.8;
	}
}
.game-no-start-bg {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.6);
}
</style>
