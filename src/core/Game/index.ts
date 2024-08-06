import Factory from '@/core/Base/factory'
import PlayerTask from '@/core/Player'
import MonsterTask from '@/core/Monster'
import IndexDB from '@/core/IndexDB'
import ImageCache from '@/core/IndexDB/imageCache'
import GameCache from '@/core/IndexDB/gameCache'
import LogTask from '@/core/Log'

const db = new IndexDB()

export default class Game extends Factory<Game> {
	debug = true
	playerList: Array<PlayerTask> = []
	monsterList: Array<MonsterTask> = []
	currentPlayer: PlayerTask | null = null
	currentMonster: MonsterTask | null = null
	width: number = 0
	height: number = 0
	status: 'WAITING' | 'PLAYING' | 'END' = 'WAITING'
	imageCache: ImageCache = ImageCache.Instance(db)
	gameCache: GameCache = GameCache.Instance(db)
	logList: Array<LogTask> = []

	get containerStyle() {
		return {
			width: `${this.width}px`,
			height: `${this.height}px`,
		}
	}

	fightStart(monster: MonsterTask) {
		if (this.currentPlayer) {
			this.currentPlayer.fight = true
			this.currentPlayer.walk = false
			this.currentPlayer.direction = 'stand'
			this.currentMonster = monster
			if (this.debug) {
				this.pushLog(`战斗开始...`)
				this.pushLog(monster.log)
			}
		}
	}

	// 移除一个player
	removePlayer() {
		for (let i = 0; i < this.playerList.length; i++) {
			if (this.currentPlayer) {
				if (this.playerList[i].id === this.currentPlayer.id) {
					this.playerList.splice(i, 1)
					if (this.debug) {
						this.pushLog(`删除角色：${this.currentPlayer.log}`)
					}
					this.currentPlayer = null
					i--
				}
			}
		}
		this.playerList = [...this.playerList]
	}

	// 创建一个player
	createPlayer(): void {
		const player = new PlayerTask()
		this.playerList = [...this.playerList, player]
		this.currentPlayer = player
		if (this.debug) {
			this.pushLog(`创建角色：${player.log}`)
		}
	}

	// 创建一个monster
	createMonster() {
		const x = Math.round(Math.random() * this.width)
		const y = Math.round(Math.random() * this.height)
		const monster = new MonsterTask(x, y)
		this.monsterList = [...this.monsterList, monster]
		if (this.debug) {
			this.pushLog(monster.log)
		}
	}

	// 添加日志
	pushLog(message: string[] | string): void {
		if (typeof message === 'string') {
			this.logList.push(new LogTask(message))
		} else {
			message.forEach(item => {
				console.log(item)
				this.logList.push(new LogTask(item))
			})
		}
	}

	// 清空日志
	clearLog(): void {
		this.logList = []
	}

	// 复活
	reborn() {
		this.status = 'PLAYING'
		if (this.currentPlayer) {
			this.currentPlayer.reborn()
		}
		// todo 死亡惩罚
	}

	// 游戏初始化
	init(obj?: { width: number; height: number; debug?: boolean }): void {
		if (obj) {
			if (typeof obj.debug === 'boolean') this.debug = obj.debug
			if (obj.width) this.width = obj.width
			if (obj.height) this.height = obj.height
			if (this.debug) {
				this.pushLog('初始化游戏成功……')
				this.pushLog(`宽度: ${obj.width}px 高度: ${obj.height}px`)
			}
		}
	}

	// 读档
	async read() {
		this.pushLog('开发中')
	}

	// 存档
	save() {
		// const data = {
		// 	playerList: this.playerList,
		// 	currentPlayer: this.currentPlayer,
		// 	monsterList: this.monsterList,
		// 	currentMonster: this.currentMonster,
		// }
		// this.gameCache.add('game', data)
		// this.pushLog('存档成功')
		this.pushLog('开发中')
	}

	// 游戏开始
	async start() {
		const data = await this.gameCache.get('game')
		if (data) {
			await this.read()
		} else {
			this.createPlayer()
		}
		this.status = 'PLAYING'
		if (this.debug) {
			this.pushLog('游戏开始……')
		}
	}
}
