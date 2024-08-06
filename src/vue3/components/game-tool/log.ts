import Game from '@/core/Game'
import { reactive } from 'vue'

const game: Game = Game.Instance()
const state = reactive({ game })

export default () => {
	if (!state.game.currentPlayer || state.game.status === 'WAITING') return
	state.game.pushLog(state.game.currentPlayer.log)
}
