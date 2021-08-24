<template lang="pug">
.game-bg.pos-r(:style="style")
	slot
	.game-no-start-bg.pos-a.fn-flex(v-if="game.status === 'WAITING'")
		.game-start-container
			.game-start-btn.pos-a.cursor-pointer(@click="start") 开始
	.game-start-bg.pos-a(v-if="game.status === 'PLAYING'")
		player(:x="game.currentPlayer.x", :y="game.currentPlayer.y")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onMounted } from 'vue'
import Game from '@/core/Game'
import start from './start'
import player from '@/vue3/components/player/index.vue'

export default defineComponent({
	name: 'game-v',
	components: { player },
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		const style = computed(() => {
			return {
				width: state.game.width + 'px',
				height: state.game.height + 'px',
			}
		})

		onMounted(() => {
			state.game.init({ width: 1000, height: 600 })
		})
		
		return {
			...toRefs(state),
			start,
			style,
		}
	},
})
</script>
<style lang="scss" scoped>
.game-bg {
	height: 100%;
	background-image: url('../../../imgs/map-bg.jpg');
}
.game-start-btn {
	color: #fff;
	font-size: 20px;
	&:hover {
		opacity: 0.8;
	}
}
.game-start-bg,
.game-no-start-bg {
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
.game-no-start-bg {
	background-color: rgba(0, 0, 0, 0.6);
	align-items: center;
	justify-content: center;
}
</style>
