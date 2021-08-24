import BaseCache from '@/core/IndexDB/baseCache'

interface ImageCacheDB {
	id?: number
	picture?: Blob
	name?: string
}

export default class ImageCache extends BaseCache {
	async add(name: string, url): Promise<any> {
		const collection: ImageCacheDB = await this.db.imageCache.get({ name })
		const res = await fetch(url)
		const blob = await res.blob()
		if (collection) {
			return this.db.imageCache.update(collection.id, {
				name,
				picture: blob,
			})
		} else {
			return this.db.imageCache.put({
				name,
				picture: blob,
			})
		}
	}

	async get(name: string): Promise<string> {
		if (!name) return
		const collection: ImageCacheDB = await this.db.imageCache.get({ name })
		if (collection) {
			return window.URL.createObjectURL(collection.picture)
		} else {
			this.add(name, name)
			return name
		}
	}
}
