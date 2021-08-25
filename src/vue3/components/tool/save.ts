import Game from '@/core/Game'
import { reactive } from 'vue'

const game: Game = Game.Instance()
const state = reactive({ game })

export default () => {
	state.game.save()
}
