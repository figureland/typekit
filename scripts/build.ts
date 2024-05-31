import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: [
    './src/index.ts',
    './src/device.ts',
    './src/guards.ts',
    './src/map.ts',
    './src/merge.ts',
    './src/object.ts',
    './src/async.ts',
    './src/time.ts',
    './src/equals.ts',
    './src/clone.ts'
  ],
  outdir: './dist',
  minify: false,
  plugins: [dts()]
})
