process.env.INCLUDE_DEPS === 'true'
process.env.BUILD === 'production'

  import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  *
  * @author ${pkg.author}
  * @license ${pkg.license}
  */`

export default {
  input: 'src/index.js',
  output: [
    {
      banner,
      file: 'dist/iterable-exec.umd.js',
      format: 'umd',
      name: 'IterableExec',
    },
    {
      banner,
      file: 'dist/iterable-exec.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    babel()
  ],
}
