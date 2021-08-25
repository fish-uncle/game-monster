<template lang="pug">
.game-bg.pos-r(:style="style")
	slot
	game-waiting(v-if="game.status === 'WAITING'")
	game-playing(v-if="game.status === 'PLAYING'")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onMounted } from 'vue'
import Game from '@/core/Game'
import gamePlaying from '@/vue3/components/game-playing/index.vue'
import gameWaiting from '@/vue3/components/game-waitting/index.vue'

export default defineComponent({
	name: 'game-v',
	components: { gamePlaying, gameWaiting },
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
	font-size: 20px;
	color: #fff;
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
	overflow: hidden;
}
.game-no-start-bg {
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.6);
}
</style>
