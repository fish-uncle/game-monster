import { v4 as uuidv4 } from 'uuid'
import MonsterAttribute from './attribute'

export default class Monster {
	id: string // id
	name: string // 昵称
	monsterAttribute: MonsterAttribute
	width = 20 // 怪物大小
	height = 20

	x = 0 // x坐标
	y = 0 // y坐标

	unAlive = {
		gold: 10, // 死亡获取金币数
		experience: 10, // 死亡掉落获取经验值
	}

	get log() {
		return [`怪物信息 昵称：${this.name} 坐标：${this.x},${this.y}`, this.monsterAttribute.log]
	}

	// 当前存活状态
	get alive(): boolean {
		return this.monsterAttribute.currentBlood > 0
	}

	constructor(x, y) {
		this.x = x
		this.y = y
		this.id = uuidv4()
		this.name = '怪物'
		this.monsterAttribute = new MonsterAttribute()
	}
}
