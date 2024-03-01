import OpenAI from 'openai'

import { assertDefined } from '@/shared/lib/assert-defined'

const openAIApiKey = assertDefined(
  process.env.OPENAI_API_KEY,
  'OPENAI_API_KEY environment variable is not defined'
)
const heliconeApiKey = assertDefined(
  process.env.HELICONE_API_KEY,
  'HELICONE_API_KEY environment variable is not defined'
)

const openAIClient = new OpenAI({
  apiKey: openAIApiKey,
  baseURL: 'https://oai.hconeai.com/v1',
  defaultHeaders: {
    'Helicone-Auth': `Bearer ${heliconeApiKey}`,
    'Helicone-Cache-Enabled': 'true',
  },
})

export { openAIClient }
