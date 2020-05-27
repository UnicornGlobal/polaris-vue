<script>
import PolarisFormLayoutGroup from './PolarisFormLayoutGroup.vue'
import PolarisFormLayoutItem from './PolarisFormLayoutItem.vue'

import ComponentHelpers from '../ComponentHelpers.js'

export default {
    props: {

    },
    render(createElement) {
        return createElement('div', { 'class': 'Polaris-FormLayout' },
            ComponentHelpers.wrapNodesWithComponent(createElement,
                                                    this.$slots.default,
                                                    PolarisFormLayoutItem,
                                                    [PolarisFormLayoutGroup]))
    }
}
</script>
