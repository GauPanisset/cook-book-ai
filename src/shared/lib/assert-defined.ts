/**
 * Throw an error when the provided value is undefined.
 *
 * The return value is then guaranteed not to be undefined.
 */
const assertDefined = <T>(
  value: T | undefined,
  message = 'Value is undefined'
): T => {
  if (value === undefined) {
    throw new Error(message)
  }

  return value
}

export { assertDefined }
