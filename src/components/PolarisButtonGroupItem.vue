<template>
  <div
    :class="classes"
    tabindex="-1"
    @focusin="focused = true"
    @focusout="focused = false"
  >
    <slot />
  </div>
</template>

<script>
import ComponentHelpers from '../ComponentHelpers.js'

export default {
    props: {
        plain: Boolean,
    },
    data() {
        return {
            focused: false
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-ButtonGroup__Item', [
                'focused',
                'plain',
            ], this)
        }
    }
}
</script>
