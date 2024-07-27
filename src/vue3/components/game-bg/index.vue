<template lang="pug">
.game-bg.pos-r(:style="style")
	slot
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import Game from '@/core/Game'

export default defineComponent({
	name: 'game-v',
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })

		const style = computed(() => {
			return {
				width: state.game.width + 'px',
				height: state.game.height + 'px',
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
.game-bg {
	height: 100%;
	background-image: url('../../imgs/map-bg.jpg');
}
</style>
