<template lang="pug">
.game-bg.pos-r(:style="style")
	slot
	.game-no-start-bg.pos-a.fn-flex(v-if="game.status === 'WAITING'")
		.game-start-container
			.game-start-btn.pos-a.cursor-pointer(@click="start") 开始
	.game-start-bg.pos-a(v-if="game.status === 'PLAYING'")
		player(v-if="game.currentPlayer", :x="game.currentPlayer.x", :y="game.currentPlayer.y", @walk-stop="walkStop")
		monster(v-for="item in game.monsterList", v-bind="item", :key="item.id")
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, computed, onMounted } from 'vue'
import Game from '@/core/Game'
import start from './start'
import walkStop from './walkStop'
import player from '@/vue3/components/player/index.vue'
import monster from '@/vue3/components/monster/index.vue'

export default defineComponent({
	name: 'game-v',
	components: { player, monster },
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
			walkStop,
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
