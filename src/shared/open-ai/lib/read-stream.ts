const readStream = async (
  stream: ReadableStream,
  onChunk: (chunk: string) => void
) => {
  const reader = stream.getReader()
  const decoder = new TextDecoder()

  let done = false
  while (!done) {
    const { value, done: doneReading } = await reader.read()
    const chunk = decoder.decode(value)

    onChunk(chunk)

    done = doneReading
  }
}

export { readStream }
