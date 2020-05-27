<script>
import PolarisFormLayoutItem from './PolarisFormLayoutItem.vue'

import ComponentHelpers from '../ComponentHelpers.js'

export default {
    props: {

    },
    render(createElement) {
        return createElement('div', {
                'class': 'Polaris-FormLayout__Items'
            },
            ComponentHelpers.wrapNodesWithComponent(createElement,
                                                    this.$slots.default,
                                                    PolarisFormLayoutItem))
    }
}
</script>