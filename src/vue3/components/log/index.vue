<template lang="pug">
ul.log-box(:style="style")
	li.fn-flex(v-for="item in game.logList")
		span {{ item.date }}
		p {{ item.message }}
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue'
import Game from '@/core/Game'

export default defineComponent({
	name: 'player',
	setup() {
		const game: Game = Game.Instance()
		const state = reactive({ game })
		const style = computed(() => {
			return {
				width: state.game.width + 'px',
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
.log-box {
	height: 100px;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
	overflow-y: auto;
	padding: 10px 0;
	li {
		align-items: center;
		margin-bottom: 8px;
		
		span {
			padding-left: 10px;
			margin-right: 10px;
		}
	}
}
</style>
