<template lang="pug">
.monster.pos-a(:style="style")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed, } from 'vue'
import Game from '@/core/Game'

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
		const state = reactive({ game })

		const style = computed(() => {
			return {
				left: `${props.x}px`,
				top: `${props.y}px`,
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
	width: 20px;
	height: 20px;
}
</style>
