type Item = {
	id: string
	name: string
	count: number
}

// 背包
export default class Bag {
	gold = 0 // 金币数量
	max = 10 // 背包容量
	items: Item[] = [] // 背包物品

	get log() {
		return `当前背包：金币数：${this.gold} 背包物品:${
			this.items.length > 0 ? this.items.map(item => `${item.name} x ${item.count}`) : '无'
		}`
	}

	constructor() {}
}
