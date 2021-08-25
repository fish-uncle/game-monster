import Factory from '@/core/Base/factory'
import PlayerTask from '@/core/Player/task'
import MonsterTask from '@/core/Monster/task'
// import IndexDB from '@/core/IndexDB'
// import ImageCache from '@/core/IndexDB/imageCache'
// import GameCache from '@/core/IndexDB/gameCache'
import LogTask from '@/core/Log/task'

const md5 = require('md5')
// const db = new IndexDB()

export default class Game extends Factory<Game> {
	debug = true
	playerList: Array<PlayerTask> = []
	monsterList: Array<MonsterTask> = []
	currentPlayer: PlayerTask | null = null
	currentMonster: MonsterTask | null = null
	width: number
	height: number
	status: 'WAITING' | 'PLAYING' | 'END' = 'WAITING'
	// imageCache: ImageCache = ImageCache.Instance(db)
	// gameCache: GameCache = GameCache.Instance(db)
	logList: Array<LogTask> = []
	hash: string

	fightStart(monster: MonsterTask) {
		this.currentPlayer.fight = true
		this.currentPlayer.walk = false
		this.currentPlayer.direction = 'stand'
		this.currentMonster = monster
		if (this.debug) {
			this.pusLog(`战斗开始...`)
			this.pusLog(monster.log)
		}
	}

	// 移除一个player
	removePlayer() {
		for (let i = 0; i < this.playerList.length; i++) {
			if (this.playerList[i].id === this.currentPlayer.id) {
				this.playerList.splice(i, 1)
				if (this.debug) {
					this.pusLog(`删除角色：${this.currentPlayer.log}`)
				}
				this.currentPlayer = null
				i--
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
			this.pusLog(`创建角色：${player.log}`)
		}
	}

	// 创建一个monster
	createMonster() {
		const monster = new MonsterTask({
			x: Math.round(Math.random() * this.width),
			y: Math.round(Math.random() * this.height),
			level: this.currentPlayer.level,
		})
		this.monsterList = [...this.monsterList, monster]
		if (this.debug) {
			this.pusLog(`创建怪物：${monster.log}`)
		}
	}

	// 添加日志
	pusLog(message: string): void {
		this.logList.push(new LogTask(message))
	}

	// 清空日志
	clearLog(): void {
		this.logList = []
	}

	// 复活
	reborn() {
		this.status = 'PLAYING'
		// todo 死亡惩罚
	}

	// 游戏初始化
	init(obj?: { width: number; height: number; debug?: boolean }): void {
		if (obj) {
			if (typeof obj.debug === 'boolean') this.debug = obj.debug
			if (obj.width) this.width = obj.width
			if (obj.height) this.height = obj.height
			if (this.debug) {
				this.pusLog('初始化游戏成功……')
				this.pusLog(`宽度: ${obj.width}px 高度: ${obj.height}px`)
			}
		}
	}

	// 存档
	save() {
		setInterval(() => {
			const data = {
				playerList: this.playerList,
				currentPlayer: this.currentPlayer,
				monsterList: this.monsterList,
				currentMonster: this.currentMonster,
			}
			const hash = md5(data)
			if (hash !== this.hash) {
				this.hash = hash
				// this.gameCache.add('game', data)
			}
		}, 1000)
	}

	// 游戏开始
	async start() {
		// const data = await this.gameCache.get('game')
		// if (data) {
		// 	this.playerList = data.playerList
		// 	this.currentPlayer = data.currentPlayer
		// 	this.monsterList = data.monsterList
		// 	this.currentMonster = data.currentMonster
		// 	this.pusLog('读档成功')
		// } else {
		// 	this.createPlayer()
		// }
		this.status = 'PLAYING'
		this.save()
		if (this.debug) {
			this.pusLog('游戏开始……')
		}
	}
}
