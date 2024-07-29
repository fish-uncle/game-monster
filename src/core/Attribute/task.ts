export default class PlayerAttribute {
	constitution = 2 // 体质
	power = 2 // 力量
	wisdom = 2 // 智慧
	toughness = 2 // 韧性
	resistance = 2 // 抗性
	fightType: 'power' | 'wisdom' = 'power' // 攻击类型：力量/智慧
	level = 2 //等级

	// 总血量 = 体质 * 100
	get totalBlood(): number {
		return this.constitution * 100
	}
	currentBlood: number = 100 // 当前血量

	get log() {
		return `等级：${this.level} 体质：${this.constitution} 力量：${this.power} 智慧：${this.wisdom} 韧性：${this.toughness} 抗性：${this.resistance}`
	}

	// 当前存活状态
	get alive(): boolean {
		return this.currentBlood > 0
	}

	constructor(
		constitution: number,
		power: number,
		wisdom: number,
		toughness: number,
		fightType: 'power' | 'wisdom',
		level: number,
		currentBlood: number,
	) {
		this.constitution = constitution
		this.power = power
		this.wisdom = wisdom
		this.toughness = toughness
		this.fightType = fightType
		this.level = level
		this.currentBlood = currentBlood
	}
}
