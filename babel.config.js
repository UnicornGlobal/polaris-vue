module.exports = function (api) {
  api.cache(false)

  return {
    presets: [
      [
        '@babel/env'
      ]
    ],
    plugins: [
      'syntax-dynamic-import',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator'
    ]
  }
}
