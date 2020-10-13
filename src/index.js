export default {
  install(Vue) {
    const components = require.context('./components', true, /\.vue$/i)

    components.keys().map((key) => {
      const n = key.split('/').pop().split('.')[0]
      Vue.component(n, components(key).default)
    })
  }
}
