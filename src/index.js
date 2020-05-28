const components = require.context('./components', true, /\.vue$/)

export default {
  install(Vue) {
    console.log('installing')
    for (const component in components) {
      console.log('component', component)
      const name = component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
      console.log(name, '<')
      Vue.component(name, components[component])
    }
  }
}
