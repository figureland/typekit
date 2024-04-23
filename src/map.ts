export const sortMapToArray = <O extends object, K extends keyof O & string>(
  map: Map<string, O>,
  prop: K
): O[] =>
  Array.from(map.values()).sort((a, b) => {
    const aValue = String(a[prop])
    const bValue = String(b[prop])
    return aValue.localeCompare(bValue)
  })

export class NiceMap<K, V> extends Map<K, V> {
  public getOrSet = <Value extends V>(key: K, fn: () => Value) => {
    if (this.has(key)) {
      return this.get(key) as Value
    } else {
      const v = fn()
      this.set(key, v)
      return v
    }
  }
}
