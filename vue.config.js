const path = require('path')
// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
      .set('@static', resolve('src/static'))
      .set('styles', resolve('src/styles'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'text-color': '#111',
            'button-primary-background-color': '#FF8d00'
          }
        }
      }
    }
  }
}
