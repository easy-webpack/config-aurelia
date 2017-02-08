import {WebpackConfigWithMetadata, get} from '@easy-webpack/core'
const AureliaWebpackPlugin = require('aurelia-webpack-plugin')

export = function aurelia(allOptions = {root: '', src: '', title: 'Aurelia', baseUrl: '/'} as any) {
  const {title, baseUrl, root, src} = allOptions
  return function aurelia(this: WebpackConfigWithMetadata): WebpackConfigWithMetadata {
    return {
      metadata: {
        title,
        baseUrl,
        root,
        src,
      },
      resolve: {
        modules: [src].concat(get(this, 'resolve.modules', ['node_modules']))
      },
      plugins: [
        new AureliaWebpackPlugin(allOptions)
      ].concat(get(this, 'plugins', []))
    }
  }
}
