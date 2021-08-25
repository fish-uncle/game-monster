import BaseCache from '@/core/IndexDB/baseCache'

interface GameCacheDB {
	id?: number
	data?: string
	name?: string
}

export default class GameCache extends BaseCache {
	async add(name: string, data): Promise<any> {
		const collection: GameCacheDB = await this.db.gameCache.get({ name })
		if (collection) {
			return this.db.gameCache.update(collection.id, {
				name,
				data: JSON.stringify(data),
			})
		} else {
			return this.db.gameCache.put({
				name,
				data: JSON.stringify(data),
			})
		}
	}

	async get(name: string): Promise<any> {
		if (!name) return
		const collection: GameCacheDB = await this.db.gameCache.get({ name })
		if (collection) {
			return JSON.parse(collection.data)
		} else {
			return null
		}
	}
}
