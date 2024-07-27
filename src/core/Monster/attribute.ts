export default class MonsterAttribute {
	constitution = 1 // 体质
	power = 1 // 力量
	wisdom = 1 // 智慧
	toughness = 1 // 韧性
	resistance = 1 // 抗性
	fightType: 'power' | 'wisdom' = 'power' // 攻击类型：力量/智慧
	level = 1 //等级

	// 总血量 = 体质 * 100
	get totalBlood(): number {
		return this.constitution * 100
	}
	currentBlood: number = 100 // 当前血量
	constructor() {}
}
