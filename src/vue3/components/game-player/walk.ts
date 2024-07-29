import { reactive } from 'vue'
import Game from '@/core/Game'
import meet from './meet'

const runKey = { down: 40, left: 37, up: 38, right: 39 }
const game: Game = Game.Instance()
const state = reactive({ game })

const start = (event, data) => {
	if (state.game.currentPlayer?.playerAttribute.alive && !state.game.currentPlayer.fight) {
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
				if (data.left - state.game.currentPlayer.walkSpeed < -state.game.currentPlayer.width) {
					data.left = state.game.width
				} else {
					data.left -= state.game.currentPlayer.walkSpeed
				}
				state.game.currentPlayer.direction = 'left'
				break
			case runKey.up:
				if (data.top - state.game.currentPlayer.walkSpeed < -state.game.currentPlayer.height) {
					data.top = state.game.height
				} else {
					data.top -= state.game.currentPlayer.walkSpeed
				}
				state.game.currentPlayer.direction = 'up'
				break
			case runKey.right:
				if (data.left + state.game.currentPlayer.walkSpeed > state.game.width) {
					data.left = -state.game.currentPlayer.width
				} else {
					data.left += state.game.currentPlayer.walkSpeed
				}
				state.game.currentPlayer.direction = 'right'
				break
			case runKey.down:
				if (data.top + state.game.currentPlayer.walkSpeed > state.game.height) {
					data.top = -state.game.currentPlayer.height
				} else {
					data.top += state.game.currentPlayer.walkSpeed
				}
				state.game.currentPlayer.direction = 'down'
				break
		}
		meet(data)
	}
}

const stop = (event, state, emit) => {
	if (
		event.keyCode === runKey.left ||
		event.keyCode === runKey.right ||
		event.keyCode === runKey.up ||
		event.keyCode === runKey.down
	) {
		if (state.game.currentPlayer.walk) {
			state.game.currentPlayer.direction = 'stand'
			state.game.currentPlayer.walk = false
			if (state.game.debug) {
				state.game.pusLog(
					`${state.game.currentPlayer.x},${state.game.currentPlayer.y} 移动至 ${state.left},${state.top}`,
				)
			}
		}
		emit('walk-stop', { x: state.left, y: state.top })
	}
}

export default { stop, start }
