interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Krinchaboy', // Site author
	title: 'ШэБэ Медиа', // Site title.
	description: 'Рассказываем о главном в социальных сетях', // Description to display in the meta tags
	lang: 'ru-RU',
	ogLocale: 'ru_RU',
	shareMessage: 'Поделиться', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
