import Dexie from 'dexie'

interface ImageCacheDB {
	id?: number
	picture?: Blob
	name?: string
}

interface GameCacheDB {
	id?: number
	data?: string
	name?: string
}

export default class IndexDB extends Dexie {
	public imageCache: Dexie.Table<ImageCacheDB, number>
	public gameCache: Dexie.Table<GameCacheDB, number>

	public constructor() {
		super('game-monster')
		this.version(1).stores({
			imageCache: '++id,picture,name',
		})
		this.version(1).stores({
			gameCache: '++id,data,name',
		})
		this.imageCache = this.table('imageCache')
		this.gameCache = this.table('gameCache')
	}
}
