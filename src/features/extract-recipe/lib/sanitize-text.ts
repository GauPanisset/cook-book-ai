const sanitizeText = (text: string) => {
  return text
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export { sanitizeText }
