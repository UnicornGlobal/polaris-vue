// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// const components = require.context('./components', true, /\.vue$/)

export default {
  install(Vue) {
    const components = require.context('./components', true, /\.vue$/i)

    console.log('installing', components)

    components.keys().map((key) => {
      console.log('key', key)
      const n = key.split('/').pop().split('.')[0]
      console.log('n>', n)
      Vue.component(n, components(key).default)
    })

    // for (const component in components) {
      // console.log('component', component)
      // const name = component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
      // console.log(name, '<')
      // Vue.component(name, components[component])
    // }
  }
}
