import getReadingTime from 'reading-time'
import { toString } from 'mdast-util-to-string'

/**
 * Injects `minutesRead` into frontmatter processed by Remark.
 */
export function remarkReadingTime() {
	return function (tree: unknown, { data }: any) {
		const textOnPage = toString(tree)
		const { minutes } = getReadingTime(textOnPage)

		function minutesWord(minutes: Number) {
			if (minutes === 1) {
				return `Время чтения: ${minutes} минута`
			} else if (Number(minutes) < 5) {
				return `Время чтения: ${minutes} минуты`
			}

			return `Время чтения: ${minutes} минут`
		}

		data.astro.frontmatter.minutesRead = minutesWord(minutes)
	}
}
