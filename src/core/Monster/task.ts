import uuid from 'uuid/v4'

export default class Monster {
	id: string // id
	name: string // 昵称

	width = 20 // 怪物大小
	height = 20

	x = 0 // x坐标
	y = 0 // y坐标

	level = 1 //等级
	unAlive = {
		gold: 10, // 死亡获取金币数
		experience: 10, // 死亡掉落获取经验值
	}

	constitution = 1 // 体质
	power = 1 // 力量
	wisdom = 1 // 智慧
	toughness = 1 // 韧性
	resistance = 1 // 抗性
	fightType: 'power' | 'wisdom' // 攻击类型：力量/智慧

	get log() {
		return `怪物信息 昵称：${this.name} 等级：${this.level} 坐标：${this.x},${this.y} 体质：${this.constitution} 力量：${this.power} 智慧：${this.wisdom} 韧性：${this.toughness} 抗性：${this.resistance}`
	}

	// 当前存活状态
	get alive(): boolean {
		return this.currentBlood > 0
	}
	// 当前血量
	currentBlood: number
	// 总血量 = 体质 * 100
	get totalBlood(): number {
		return this.constitution * 100
	}

	constructor(obj: {
		height?: number
		width?: number
		id?: string
		name?: string
		fightType?: 'power' | 'wisdom'
		x: number
		y: number
		level: number
		constitution?: number
		power?: number
		wisdom?: number
		toughness?: number
		resistance?: number
		currentBlood?: number
		unAlive?: any
	}) {
		if (obj.fightType) {
			this.id = obj.id
			this.name = obj.name
			this.width = obj.width
			this.height = obj.height
			this.x = obj.x
			this.y = obj.y
			this.level = obj.level
			this.unAlive = obj.unAlive
			this.constitution = obj.constitution
			this.power = obj.power
			this.wisdom = obj.wisdom
			this.toughness = obj.toughness
			this.resistance = obj.resistance
			this.fightType = obj.fightType
			this.currentBlood = obj.currentBlood
		} else {
			this.id = uuid()
			this.name = '怪物'
			this.x = obj.x
			this.y = obj.y
			this.fightType = 'power'
			this.currentBlood = this.totalBlood
		}
	}
}
