const components = require.context('./components', true, /\.vue$/)

export default {
  install(Vue) {
    for (const component in components) {
      const name = component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
      console.log(name, '<')
      Vue.component(name, components[component])
    }
  }
}
