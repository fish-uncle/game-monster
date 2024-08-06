<template>
	<ul class="log-box" :style="{ width: `${game.width}px` }">
		<li v-for="(item, index) in game.logList" :key="index" class="fn-flex">
			<span>{{ item.date }}</span>
			<p>{{ item.message }}</p>
		</li>
	</ul>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Game from '@/core/Game'

defineOptions({
	name: 'GameLog',
})
const game: Ref<Game> = ref(Game.Instance())
</script>
<style lang="scss" scoped>
.log-box {
	height: 200px;
	padding: 10px 0;
	overflow-y: auto;
	border: 1px solid #ddd;
	li {
		align-items: center;
		margin-bottom: 8px;

		span {
			padding-left: 10px;
			margin-right: 10px;
			color: #333;
		}
		p {
			color: #295a4c;
		}
	}
}
</style>
