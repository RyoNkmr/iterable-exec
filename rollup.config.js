process.env.INCLUDE_DEPS === 'true'
process.env.BUILD === 'production'

const pkg = require('./package.json')
const banner = `/*!
  * ${pkg.name} v${pkg.version}
  *
  * @author ${pkg.author}
  * @license ${pkg.license}
  */`

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/iterable-exec.umd.js',
      format: 'umd',
      name: 'IterableExec',
    },
    {
      file: 'dist/iterable-exec.esm.js',
      format: 'esm',
    },
  ],
  banner,
}
