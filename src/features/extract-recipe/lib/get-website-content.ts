import { createUrl } from '@/shared/lib/create-url'

import { sanitizeText } from './sanitize-text'

const getWebsiteContent = async (url: string) => {
  const response = await fetch(
    createUrl('https://www.w3.org/services/html2txt', {
      url,
      noinlinerefs: 'on',
      nonums: 'on',
    })
  )

  if (!response.ok) {
    throw new Error(
      `An error occurred while fetching the website content: ${response.status} ${response.statusText}`
    )
  }

  return sanitizeText(await response.text())
}

export { getWebsiteContent }
