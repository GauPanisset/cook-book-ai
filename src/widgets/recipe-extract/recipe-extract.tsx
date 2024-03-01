import React from 'react'

import { RecipeUi } from '@/entities/recipe'
import { extractRecipe } from '@/features/extract-recipe'

type Props = {
  url: string
}

const RecipeExtract: React.FunctionComponent<Props> = async ({ url }) => {
  const recipe = await extractRecipe(url)

  if (recipe === null) {
    return (
      <span className="mt-2 text-xs text-destructive">No data retrieved</span>
    )
  }

  return <RecipeUi {...recipe} />
}

export default RecipeExtract
