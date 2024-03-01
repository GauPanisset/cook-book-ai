const createUrl = (
  pathname: string,
  searchParams?: string | string[][] | Record<string, string> | URLSearchParams
) => {
  if (!searchParams) return pathname

  const params = new URLSearchParams(searchParams)
  return `${pathname}?${params.toString()}`
}

export { createUrl }
