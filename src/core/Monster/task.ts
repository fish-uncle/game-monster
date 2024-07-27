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
		return `怪物信息 昵称：${this.name} 等级：${this.monsterAttribute.level} 坐标：${this.x},${this.y} 体质：${this.monsterAttribute.constitution} 力量：${this.monsterAttribute.power} 智慧：${this.monsterAttribute.wisdom} 韧性：${this.monsterAttribute.toughness} 抗性：${this.monsterAttribute.resistance}`
	}

	// 当前存活状态
	get alive(): boolean {
		return this.monsterAttribute.currentBlood > 0
	}

	constructor(obj: { id?: string; name?: string; x: number; y: number; level: number }) {
		this.id = obj.id
		this.name = obj.name
		this.x = obj.x
		this.y = obj.y
		this.id = uuidv4()
		this.name = '怪物'
		this.monsterAttribute = new MonsterAttribute()
	}
}
