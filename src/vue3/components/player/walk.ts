import Game from '@/core/Game'
import { reactive } from 'vue'

const runKey = { down: 40, left: 37, up: 38, right: 39 }
const game: Game = Game.Instance()
const state = reactive({ game })

const start = event => {
	if (state.game.currentPlayer.alive) {
		if (
			event.keyCode === runKey.left ||
			event.keyCode === runKey.right ||
			event.keyCode === runKey.up ||
			event.keyCode === runKey.down
		) {
			state.game.currentPlayer.walk = true
		}
		switch (event.keyCode) {
			case runKey.left:
				state.game.currentPlayer.x -= state.game.currentPlayer.walkSpeed
				state.game.currentPlayer.direction = 'left'
				break
			case runKey.up:
				state.game.currentPlayer.y -= state.game.currentPlayer.walkSpeed
				state.game.currentPlayer.direction = 'up'
				break
			case runKey.right:
				state.game.currentPlayer.x += state.game.currentPlayer.walkSpeed
				state.game.currentPlayer.direction = 'right'
				break
			case runKey.down:
				state.game.currentPlayer.y += state.game.currentPlayer.walkSpeed
				state.game.currentPlayer.direction = 'down'
				break
		}
	}
}

const stop = event => {
	if (
		event.keyCode === runKey.left ||
		event.keyCode === runKey.right ||
		event.keyCode === runKey.up ||
		event.keyCode === runKey.down
	) {
		state.game.currentPlayer.direction = 'stand'
		state.game.currentPlayer.walk = false
	}
}

export default { stop, start }
