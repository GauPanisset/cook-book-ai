import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card'
import { Separator } from '@/shared/ui/separator'

import { formatIngredient } from '../lib/format-ingredient'
import { Recipe as RecipeType } from '../model/type'

type Props = RecipeType

const Recipe: React.FunctionComponent<Props> = ({
  servings,
  ingredients,
  instructions,
  name,
  cookingTime,
}) => {
  return (
    <Card className="m-auto max-w-xl">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-4">
          <div className="grow space-y-2">
            <h4 className="text-xl font-semibold tracking-tight">
              Ingredients
            </h4>
            <ul className="list-inside list-disc">
              {ingredients.map((ingredient) => (
                <li key={ingredient.name} className="first-letter:capitalize">
                  {formatIngredient(ingredient)}
                </li>
              ))}
            </ul>
          </div>
          <div className="grow space-y-2">
            <h4 className="text-xl font-semibold tracking-tight">Servings</h4>
            <p>{servings}</p>
            <h4 className="text-xl font-semibold tracking-tight">
              Cooking time
            </h4>
            <p>{`${cookingTime.value}${cookingTime.unit}`}</p>
          </div>
        </div>

        <Separator />
        <div className="space-y-2">
          <h4 className="text-xl font-semibold tracking-tight">Instructions</h4>
          {instructions.map((instruction, index) => (
            <div key={index} className="flex flex-col">
              <h6 className="font-semibold tracking-tight">{`Step ${
                index + 1
              }`}</h6>
              <p>{instruction.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export { Recipe }
