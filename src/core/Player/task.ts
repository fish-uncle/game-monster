import uuid from 'uuid/v4'
import { firstName, secondName } from '@/config'

export default class PlayerTask {
	id: string // id
	sex: 0 | 1 = 1 // 性别
	name: string // 昵称

	width = 32 // 人物大小
	height = 48

	x = 0 // x坐标
	y = 0 // y坐标
	walk = false // 行走状态
	direction: 'stand' | 'down' | 'left' | 'up' | 'right' = 'stand' // 行走方向

	level = 1 //等级
	gold = 0 // 金币数
	experience = 0 // 当前经验值

	fight = false // 战斗状态
	constitution = 2 // 体质
	power = 2 // 力量
	wisdom = 2 // 智慧
	toughness = 2 // 韧性
	resistance = 2 // 抗性
	fightType: 'power' | 'wisdom' // 攻击类型：力量/智慧
	speed = 2 // 敏捷

	get log() {
		return `人物信息 昵称：${this.name} 等级：${this.level} 当前经验值：${this.experience} 金币数：${this.gold} 体质：${this.constitution} 力量：${this.power} 智慧：${this.wisdom} 韧性：${this.toughness} 抗性：${this.resistance}`
	}

	// 行走速度 = 敏捷 * 2
	get walkSpeed() {
		return this.speed * 2
	}

	// 当前存活状态
	get alive(): boolean {
		return this.currentBlood > 0
	}
	// 当前血量
	currentBlood = 0
	// 总血量 = 体质 * 100
	get totalBlood(): number {
		return this.constitution * 100
	}

	// 复活
	reborn() {
		this.x = 0
		this.y = 0
	}

	constructor(obj?: PlayerTask) {
		if (obj) {
			this.id = obj.id
			this.sex = obj.sex
			this.name = obj.name
			this.width = obj.width
			this.height = obj.height
			this.x = obj.x
			this.y = obj.y
			this.walk = obj.walk
			this.direction = obj.direction
			this.level = obj.level
			this.gold = obj.gold
			this.experience = obj.experience
			this.fight = obj.fight
			this.constitution = obj.constitution
			this.power = obj.power
			this.wisdom = obj.wisdom
			this.toughness = obj.toughness
			this.resistance = obj.resistance
			this.fightType = obj.fightType
			this.speed = obj.speed
			this.currentBlood = obj.currentBlood
		} else {
			this.id = uuid()
			const name =
				firstName[Math.floor(Math.random() * firstName.length)] +
				secondName[Math.floor(Math.random() * secondName.length)]
			this.name = name
			this.fightType = 'power'
			this.currentBlood = this.totalBlood
		}
	}
}
