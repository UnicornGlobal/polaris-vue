<template>
  <div
    ref="wrapper"
    :aria-hidden="!open"
    :style="{ height: displayHeight }"
    :class="classes"
  >
    <div ref="heightNode">
      <slot />
    </div>
  </div>
</template>


<script>
import ComponentHelpers from '../ComponentHelpers.js'

export default {
    props: {
        open: Boolean
    },
    data() {
        return {
            height: null,
            animationState: 'idle'
        }
    },
    computed: {
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Collapsible', [
                'open'
            ], this)
        },
        displayHeight() {
            return this.open ? 'auto' : 0
        }
    }
}
</script>
