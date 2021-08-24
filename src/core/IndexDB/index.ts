import Dexie from 'dexie'

interface ImageCacheDB {
	id?: number
	picture?: Blob
	name?: string
}

export default class IndexDB extends Dexie {
	public imageCache: Dexie.Table<ImageCacheDB, number>

	public constructor() {
		super('game-monster')
		this.version(1).stores({
			imageCache: '++id,picture,name',
		})
		this.imageCache = this.table('imageCache')
	}
}
