// function override(config, env) {
//   return config
// }
const { override, fixBabelImports } = require('customize-cra')


const config = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)

module.exports = config