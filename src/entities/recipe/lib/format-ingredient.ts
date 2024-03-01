import { Recipe } from '../model/type'

const formatIngredient = (ingredient: Recipe['ingredients'][number]) => {
  if (!ingredient.quantity) return `${ingredient.name}`
  return `${ingredient.quantity}${ingredient.unit} ${ingredient.name}`.trim()
}

export { formatIngredient }
