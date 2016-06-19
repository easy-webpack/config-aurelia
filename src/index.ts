import {WebpackConfig, get} from '@easy-webpack/core'
const AureliaWebpackPlugin = require('aurelia-webpack-plugin')

export function aurelia(root: string, src: string, title = 'Aurelia', baseUrl = '/') {
  return function aurelia(this: WebpackConfig): WebpackConfig {
    return {
      metadata: {
        title,
        baseUrl,
        root,
        src,
      },
      resolve: {
        root: src,
        modules: [src].concat(get(this, 'resolve.modules', ['node_modules']))
      },
      plugins: [
        new AureliaWebpackPlugin({
          root,
          src
        })
      ].concat(get(this, 'plugins', []))
    }
  }
}

export function useAureliaES2015(aliases: { [packageName: string]: string }) {
  return function aureliaES2015(this: WebpackConfig): WebpackConfig {
    return {
      resolve: {
        alias: aliases
      }
    }
  }
}