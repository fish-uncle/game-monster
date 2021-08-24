import Factory from '@/core/Base/factory'
import uuid from 'uuid/v4'

export default class Player extends Factory<Player> {
	id: string // id
	name: string // 昵称

	x = 0 // x坐标
	y = 0 // y坐标

	level = 1 //等级
	gold = 10 // 死亡获取金币数
	experience = 10 // 死亡掉落获取经验值

	constitution = 1 // 体质
	power = 1 // 力量
	wisdom = 1 // 智慧
	toughness = 1 // 韧性
	resistance = 1 // 抗性
	fightType: 'power' | 'wisdom' // 攻击类型：力量/智慧

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

	constructor(obj: { name: string; level: number }) {
		super()
		this.id = uuid()
		this.name = obj.name
		this.currentBlood = this.totalBlood
	}
}
