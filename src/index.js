// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// const components = require.context('./components', true, /\.vue$/)

export default {
  install(Vue) {
    const components = require.context('./components', true, /\.vue$/i)
    console.log('installing')
    for (const component in components) {
      console.log('component', component)
      const name = component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
      console.log(name, '<')
      Vue.component(name, components[component])
    }
  }
}
