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
		return new Promise(resolve => {
			if (!name) resolve(null)
			this.db.gameCache
				.get({ name })
				.then(collection => {
					if (collection) {
						resolve(JSON.parse(collection.data))
					} else {
						resolve(null)
					}
				})
				.catch(() => {
					resolve(null)
				})
		})
	}
}
