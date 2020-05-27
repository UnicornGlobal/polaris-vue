<template>
  <dynamic-tag
    :tag="hasMultipleSections ? 'div' : 'ul'"
    class="Polaris-ActionList"
  >
    <polaris-action-list-section
      v-for="(section, index) in finalSections"
      :key="index"
      :section="section"
      :has-multiple-sections="hasMultipleSections"
      @action-any-item="onActionAnyItem"
    />
  </dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue'
import PolarisActionListSection from './PolarisActionListSection.vue'

export default {
    components: {
        DynamicTag,
        PolarisActionListSection
    },
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        },
        sections: {
            type: Array,
            default() {
                return []
            }
        },
    },
    computed: {
        finalSections() {
            if (this.items) {
                return [{items: this.items}, ...this.sections]
            }
            return this.sections
        },
        hasMultipleSections() {
            return this.finalSections.length > 0
        },
    },
    methods: {
        onActionAnyItem(action) {
            this.$emit('action-any-item', action)
        },
        handleAction(action) {
            var res = true
            if (action.onAction) {
                res = action.onAction()
            }
            if (res && action.url) {
                window.location.href = action.url
            }
        }
    }
}
</script>
