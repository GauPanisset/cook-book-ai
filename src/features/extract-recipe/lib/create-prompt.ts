import { OpenAI } from 'openai'

const systemPrompt = `You are given the entire content of a website, but it doesn't have any formatting. This website is supposed to describe a cook recipe.
Your task is to extract the recipe of the website. Here's what you need to do:
- Gather all ingredients involved in the recipe, their quantity with its unit.
- Figure out what are the instructions explained in the recipe.
- For each instruction step, write a useful and detailed description about it, that is no longer than 50 words.
- Use your own words in the same language as the website to explain the steps.`

const formatPrompt = `using JSON format with the following shape: 
{
  "name": "string",
  "ingredients": [{
    "name": "string", 
    "quantity": "number",
    "unit": "string"
  }],
  "servings": "number",
  "instructions": [{
    "involvedIngredients": ["string"],
    "description": "string"
  }],
  "cookingTime": {
    value: "number",
    unit: "string",
  }
}.`

const createPrompt = (
  content: string
): OpenAI.Chat.ChatCompletionMessageParam[] => {
  const prompt = `The content of the website is provided below:
    "${content}"
  Now, write what you learn about the recipe ${formatPrompt}`

  return [
    { role: 'system', content: systemPrompt },
    { role: 'user', content: prompt },
  ]
}

export { createPrompt }
