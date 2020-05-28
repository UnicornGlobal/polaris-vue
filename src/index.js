const components = require.context('./components', true, /\.vue$/)

export default {
    install(Vue) {
        for (const component in components) {
            Vue.component(component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase(), components[component])
        }
    }
}
