import { Recipe, recipeSchema } from '@/entities/recipe'

const parseResponse = (response: string): Recipe => {
  const parsedResponse = recipeSchema.safeParse(response)

  if (parsedResponse.success) {
    return parsedResponse.data
  }

  throw new Error(parsedResponse.error.message)
}

export { parseResponse }
