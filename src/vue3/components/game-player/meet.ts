import Game from '@/core/Game'
import { reactive } from 'vue'

const game: Game = Game.Instance()
const state = reactive({ game })

export default data => {
	state.game.monsterList.forEach(item => {
		const maxW = item.x + item.width
		const minW = item.x
		const maxH = item.y + item.height
		const minH = item.y
		if (
			((maxW > data.left && maxW < data.left + state.game.currentPlayer.width) ||
				(minW > data.left && minW < data.left + state.game.currentPlayer.width)) &&
			((maxH > data.top && maxH < data.top + state.game.currentPlayer.height) ||
				(minH > data.top && minH < data.top + state.game.currentPlayer.height))
		) {
			state.game.fightStart(item)
		}
	})
}
