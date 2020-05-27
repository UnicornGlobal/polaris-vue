<template>
  <dynamic-tag
    :tag="tag"
    class="Polaris-Heading"
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
            default: 'h2'
        }
    }
}
</script>