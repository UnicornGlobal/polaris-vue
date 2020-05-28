const components = require.context('+/components', true, /\.vue$/)

export default {
    install(Vue, options) {
        options = Object.assign(defaults, options)

        for (const component in components) {
            Vue.component(component.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase(), components[component])
        }
    }
}
