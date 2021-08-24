import Factory from '@/core/Base/factory'
import { format } from 'date-fns'

export default class Log extends Factory<Log> {
	message: string
	date: string

	constructor(message: string) {
		super()
		this.message = message
		this.date = format(new Date(), 'yyyy-MM-dd mm:ss')
	}
}
