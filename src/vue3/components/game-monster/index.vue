<template>
	<div class="monster pos-a" :style="style"></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import Game from '@/core/Game'

export default defineComponent({
	name: 'GameMonster',
	props: {
		x: {
			type: Number,
		},
		y: {
			type: Number,
		},
		width: {
			type: Number,
		},
		height: {
			type: Number,
		},
	},
	setup(props) {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		const style = computed(() => {
			return {
				left: `${props.x}px`,
				top: `${props.y}px`,
				width: `${props.width}px`,
				height: `${props.height}px`,
			}
		})

		return {
			...toRefs(state),
			style,
		}
	},
})
</script>
<style lang="scss" scoped>
.monster {
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
