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
	setup(props, { emit }) {
		const game: Game = Game.Instance()
		const state = reactive({ left: props.x, top: props.y, game })

		const style = computed(() => {
			const img = personImg[state.game.currentPlayer.direction]
			return {
				backgroundImage: `url(${img})`,
				left: `${state.left}px`,
				top: `${state.top}px`,
				width: `${state.game.currentPlayer.width}px`,
				height: `${state.game.currentPlayer.height}px`,
			}
		})

		const start = e => walk.start(e, state)
		const stop = e => walk.stop(e, state, emit)

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
	top: 0;
	left: 0;
	width: 32px;
	height: 48px;
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
