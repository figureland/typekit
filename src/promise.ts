export const isFulfilled = <T>(
  result: PromiseSettledResult<T>
): result is PromiseFulfilledResult<T> => result.status === 'fulfilled'

export const pickFulfilled = <T>(results: PromiseSettledResult<T>[]) => ({
  rejected: results.filter((i): i is PromiseRejectedResult => i.status === 'rejected'),
  fulfilled: results.filter(isFulfilled).map((i) => i.value)
})

export const promiseSome = async <T>(promises: Promise<T>[]) => {
  const results = await Promise.allSettled(promises)
  return pickFulfilled(results)
}
