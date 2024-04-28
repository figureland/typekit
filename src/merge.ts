type O = {
  [x: string | number | symbol]: any
}

export type Merge<T extends O = O, U extends T | Partial<O> = O> = (s: T, u: U) => T

export const simpleMerge: Merge = (o, u) => ({ ...o, ...u })
