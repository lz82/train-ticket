// function override(config, env) {
//   return config
// }
const { override, fixBabelImports, addLessLoader, useEslintRc } = require('customize-cra')

const config = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
  useEslintRc()
)

module.exports = config
