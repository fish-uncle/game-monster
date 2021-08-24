import Game from '@/core/Game'
import { reactive } from 'vue'
import { firstName, secondName } from '@/config'

const game: Game = Game.Instance()
const state = reactive({ game })

export default () => {
	state.game.createPlayer({
		sex: 1,
		name: firstName + secondName,
	})
	state.game.start()
}
