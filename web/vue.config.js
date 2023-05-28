const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:process.env.NODE_ENV==='production'?'./':'/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.html$/,
          use: 'html-loader'
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
              options: {
                /**
                 * 解决less报错 错误信息 https://github.com/ant-design/ant-motion/issues/44
                 */
                lessOptions: {
                  javascriptEnabled: true
                }
              }
            }
          ],
        }
      ]
    }
  }
})
