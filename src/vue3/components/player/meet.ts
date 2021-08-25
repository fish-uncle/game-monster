import Game from '@/core/Game'
import { reactive } from 'vue'

const game: Game = Game.Instance()
const state = reactive({ game })

export default data => {
	state.game.monsterList.forEach(item => {
		const maxW = data.left + state.game.currentPlayer.width
		const minW = data.left
		const maxH = data.top + state.game.currentPlayer.height
		const minH = data.top
		console.log(minW, maxW, minH, maxH)
		if (
			((maxW > item.x && maxW < item.x + item.width) || (minW > item.x && minW < item.x + item.width)) &&
			((maxH > item.y && maxH < item.y + item.height) || (minH > item.y && minH < item.y + item.height))
		) {
			state.game.currentPlayer.fight = true
		}
	})
}
