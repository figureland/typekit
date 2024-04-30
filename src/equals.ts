import { has, is, keys } from '@figureland/typekit/object'

export type Equals<T extends any = any> = (s: T, t: T) => boolean

export const simpleEquals: Equals = (state, prevState) => is(state, prevState)

export const shallowEquals: Equals = (obj1, obj2) => {
  if (!obj1 || !obj2) {
    return false
  }

  if (simpleEquals(obj1, obj2)) {
    return true
  }

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false
  }

  const keys1 = keys(obj1)
  const keys2 = keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }

  for (const key of keys1) {
    if (!has(obj2, key) || obj1[key] !== obj2[key]) {
      return false
    }
  }

  if (obj1 instanceof Map && obj2 instanceof Map) {
    return false
  }

  return true
}
