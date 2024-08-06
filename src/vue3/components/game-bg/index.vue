<template>
	<div class="game-bg pos-r" :style="game.containerStyle">
		<slot></slot>
	</div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import Game from '@/core/Game'

defineOptions({
	name: 'GameBg',
})
const game: Ref<Game> = ref(Game.Instance())
</script>
<style lang="scss" scoped>
.game-bg {
	height: 100%;
	background-image: url('../../imgs/map-bg.jpg');
}
</style>
