import { decode, encode } from 'gpt-3-encoder'

const limitGPT3Tokens = (text: string, limit: number) => {
  return decode(encode(text).slice(0, limit))
}

export { limitGPT3Tokens }
