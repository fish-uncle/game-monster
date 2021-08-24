<template lang="pug">
.player.pos-a(:style="style", :class="{ walk: game.currentPlayer.walk }")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onBeforeUnmount, onMounted } from 'vue'
import Game from '@/core/Game'
import { personImg } from '@/config'
import { off, on } from '@/vue3/utils/dom'
import walk from './walk'

export default defineComponent({
	name: 'player',
	props: {
		x: {
			type: Number,
		},
		y: {
			type: Number,
		},
	},
	setup(props) {
		const game: Game = Game.Instance()
		const state = reactive({ left: props.x, top: props.y, game })

		const style = computed(() => {
			const img = personImg[state.game.currentPlayer.direction]
			return {
				backgroundImage: `url(${img})`,
				left: `${state.game.currentPlayer.x}px`,
				top: `${state.game.currentPlayer.y}px`,
			}
		})

		const start = walk.start
		const stop = walk.stop

		onBeforeUnmount(() => {
			off(document.documentElement, 'keydown', start)
			off(document.documentElement, 'keyup', stop)
		})

		onMounted(() => {
			on(document.documentElement, 'keydown', start)
			on(document.documentElement, 'keyup', stop)
		})

		return {
			...toRefs(state),
			style,
		}
	},
})
</script>
<style lang="scss" scoped>
.player {
	left: 0;
	width: 32px;
	height: 48px;
	top: 0;
	background-size: 32px 48px;
	&.walk {
		background-size: 128px 48px;
		animation: walk 0.5s steps(4) infinite;
	}
}
@keyframes walk {
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: -128px 0;
	}
}
</style>
