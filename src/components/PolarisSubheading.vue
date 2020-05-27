<template>
  <dynamic-tag
    :tag="tag"
    class="Polaris-Subheading"
  >
    <slot />
  </dynamic-tag>
</template>


<script>
import DynamicTag from './DynamicTag.vue'

export default {
    components: {
        DynamicTag
    },
    props: {
        tag: {
            type: String,
            default: 'h3'
        }
    }
}
</script>