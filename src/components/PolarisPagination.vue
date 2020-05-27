<template>
  <nav
    :class="classes"
    :aria-label="accessibilityLabel || 'Pagination'"
  >
    <polaris-unstyled-link
      v-if="previousURL"
      class="Polaris-Pagination__Button"
      :url="previousURL"
      aria-label="Previous"
      @mouseup="handleMouseUp"
    >
      <polaris-icon :source="arrowLeft" />
    </polaris-unstyled-link>
    <polaris-button
      v-if="!previousURL"
      class="Polaris-Pagination__Button"
      :disabled="!hasPrevious"
      @click="onPrevious"
      @mouseup="handleMouseUp"
    >
      <polaris-icon :source="arrowLeft" />
    </polaris-button>

    <polaris-unstyled-link
      v-if="nextURL"
      class="Polaris-Pagination__Button"
      :url="nextURL"
      aria-label="Next"
      @mouseup="handleMouseUp"
    >
      <polaris-icon :source="arrowRight" />
    </polaris-unstyled-link>
    <polaris-button
      v-if="!nextURL"
      class="Polaris-Pagination__Button"
      :disabled="!hasNext"
      @click="onNext"
      @mouseup="handleMouseUp"
    >
      <polaris-icon :source="arrowRight" />
    </polaris-button>
  </nav>
</template>


<script>
import PolarisButton from './PolarisButton.vue'
import PolarisUnstyledLink from './PolarisUnstyledLink.vue'

import ComponentHelpers from '../ComponentHelpers.js'

import arrowRight from '../resources/arrow-right.svg'
import arrowLeft from '../resources/arrow-left.svg'

export default {
    components: {
        PolarisButton,
        PolarisUnstyledLink,
    },
    props: {
        hasNext: Boolean,
        hasPrevious: Boolean,
        nextURL: String,
        previousURL: String,
        plain: Boolean,
        accessibilityLabel: String,
    },
    data() {
        return {
            arrowRight: arrowRight,
            arrowLeft: arrowLeft
        }
    },
    computed:{
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-Pagination', [
                'plain',
            ], this)
        },
    },
    methods: {
        handleMouseUp(e) {
            var target = e.target || e.srcElement
            target.blur()
        },
        onNext() {
            this.$emit('next')
        },
        onPrevious() {
            this.$emit('previous')
        }
    }
}
</script>
