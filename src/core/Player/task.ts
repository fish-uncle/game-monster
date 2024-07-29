import { v4 as uuidv4 } from 'uuid'
import { firstName, secondName } from '@/config'
import PlayerAttribute from './attribute'

export default class PlayerTask {
	id: string // id
	sex: 0 | 1 = 1 // 性别
	name: string // 昵称
	playerAttribute: PlayerAttribute

	width = 32 // 人物大小
	height = 48

	x = 0 // x坐标
	y = 0 // y坐标
	walk = false // 行走状态
	direction: 'stand' | 'down' | 'left' | 'up' | 'right' = 'stand' // 行走方向

	gold = 0 // 金币数
	experience = 0 // 当前经验值

	fight = false // 战斗状态
	speed = 2 // 敏捷

	get log() {
		return [
			`人物信息 昵称：${this.name} 当前经验值：${this.experience} 金币数：${this.gold}`,
			this.playerAttribute.log,
		]
	}

	// 行走速度 = 敏捷 * 2
	get walkSpeed() {
		return this.speed * 2
	}

	// 复活
	reborn() {
		this.x = 0
		this.y = 0
	}

	constructor() {
		this.id = uuidv4()
		const name =
			firstName[Math.floor(Math.random() * firstName.length)] +
			secondName[Math.floor(Math.random() * secondName.length)]
		this.name = name
		this.playerAttribute = new PlayerAttribute()
	}
}
