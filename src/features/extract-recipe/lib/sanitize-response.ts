const sanitizeResponse = (response: string) => {
  return response.replaceAll('```json', '').replaceAll('```', '').trim()
}

export { sanitizeResponse }
