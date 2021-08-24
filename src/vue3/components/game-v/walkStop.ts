import Game from '@/core/Game'
import { reactive } from 'vue'

const game: Game = Game.Instance()
const state = reactive({ game })

export default ({ x, y }) => {
	state.game.currentPlayer.x = x
	state.game.currentPlayer.y = y
}
