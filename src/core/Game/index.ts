import Factory from '@/core/Base/factory'
import Player from '@/core/Player'
import IndexDB from '@/core/IndexDB'
import ImageCache from '@/core/IndexDB/imageCache'
import Log from '@/core/Log'

const db = new IndexDB()
export default class Game extends Factory<Game> {
	debug = true
	playerList: Array<Player> = []
	currentPlayer: Player | null = null
	width: number
	height: number
	status: 'WAITING' | 'PLAYING' | 'END' = 'WAITING'
	imageCache: ImageCache = ImageCache.Instance(db)
	logList: Array<Log> = []

	// 创建一个player
	createPlayer(obj: { sex: 0 | 1; name: string }): void {
		const player = new Player(obj)
		this.playerList = [...this.playerList, player]
		this.currentPlayer = player
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
				this.logList.push(new Log('初始化游戏成功……'))
				this.logList.push(new Log(`宽度: ${obj.width}px 高度: ${obj.height}px`))
			}
		}
	}

	// 游戏开始
	start(): void {
		this.status = 'PLAYING'
		if (this.debug) {
			this.logList.push(new Log('游戏开始……'))
		}
	}
}
