import BaseCache from '@/core/IndexDB/baseCache'

interface GameCacheDB {
	id?: number
	data?: string
	name?: string
}

export default class GameCache extends BaseCache {
	add(name: string, data) {
		this.db.gameCache.get({ name }).then((collection: GameCacheDB) => {
			if (collection) {
				this.db.gameCache.put({
					id: collection.id,
					name,
					data: JSON.stringify(data),
				})
			} else {
				this.db.gameCache.put({
					name,
					data: JSON.stringify(data),
				})
			}
		})
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
