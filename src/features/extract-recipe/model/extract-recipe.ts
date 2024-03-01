import { openAIClient } from '@/shared/open-ai/index.server'

import { createPrompt } from '../lib/create-prompt'
import { getWebsiteContent } from '../lib/get-website-content'
import { parseResponse } from '../lib/parse-response'
import { sanitizeResponse } from '../lib/sanitize-response'

const extractRecipe = async (url: string) => {
  const content = await getWebsiteContent(url)

  const messages = createPrompt(content)

  const response = await openAIClient.chat.completions.create({
    model: 'gpt-3.5-turbo',
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.9,
    top_p: 1,
    max_tokens: 800,
    messages,
  })

  return response.choices[0].message.content
    ? parseResponse(sanitizeResponse(response.choices[0].message.content))
    : null
}

export { extractRecipe }
