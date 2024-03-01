import { z } from 'zod'

const recipeSchema = z.object({
  servings: z.number(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.number(),
      unit: z.string(),
    })
  ),
  instructions: z.array(
    z.object({
      involvedIngredients: z.array(z.string()),
      description: z.string(),
    })
  ),
  name: z.string(),
  cookingTime: z.object({
    value: z.number(),
    unit: z.string(),
  }),
})

type Recipe = z.infer<typeof recipeSchema>

export type { Recipe }
export { recipeSchema }
