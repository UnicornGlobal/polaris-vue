<template>
  <dynamic-template>
    <template
      v-if="url"
      slot="active"
    >
      <polaris-unstyled-link
        class="Polaris-Page__Action"
        :external="external"
        :url="url"
        :aria-label="accessibilityLabel"
        @mouse-up="handleMouseUp"
      >
        <template v-if="icon || disclosure">
          <span class="Polaris-Page__ActionContent">
            <span
              v-if="icon"
              class="Polaris-Page__ActionIcon"
            >
              <polaris-icon :source="icon" />
            </span>
            <span>
              <slot v-if="icon || disclosure" />
            </span>
            <span
              v-if="disclosure"
              class="Polaris-Page__ActionIcon"
            >
              <polaris-icon source="caretDown" />
            </span>
          </span>
        </template>
        <template v-if="!icon && !disclosure">
          <slot v-if="!icon && !disclosure" />
        </template>
      </polaris-unstyled-link>
    </template>
    <template
      v-if="!url"
      slot="active"
    >
      <button
        :class="classes"
        :aria-label="accessibilityLabel"
        :disabled="disabled"
        type="button"
        @click="onAction"
        @mouse-up="handleMouseUp"
      >
        <template v-if="icon || disclosure">
          <span class="Polaris-Page__ActionContent">
            <span
              v-if="icon"
              class="Polaris-Page__ActionIcon"
            >
              <polaris-icon :source="icon" />
            </span>
            <span>
              <slot v-if="icon || disclosure" />
            </span>
            <span
              v-if="disclosure"
              class="Polaris-Page__ActionIcon"
            >
              <polaris-icon source="caretDown" />
            </span>
          </span>
        </template>
        <template v-if="!icon && !disclosure">
          <slot v-if="!icon && !disclosure" />
        </template>
      </button>
    </template>
  </dynamic-template>
</template>


<script>
import DynamicTemplate from './DynamicTemplate.vue'
import PolarisIcon from './PolarisIcon.vue'
import PolarisUnstyledLink from './PolarisUnstyledLink.vue'

export default {
    components: {
        DynamicTemplate,
        PolarisIcon,
        PolarisUnstyledLink,
    },
    props: {
      icon: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
        external: Boolean,
        disclosure: Boolean,
      accessibilityLabel: {
        type: String,
        default: ''
      },
        disabled: Boolean,
    },
    computed: {
        classes() {
            var r = {
                'Polaris-Page__Action': 1,
                'Polaris-Page__Action--disabled': this.disabled,
                'Polaris-Page__Action--iconOnly': this.icon && this.emptyChildren
            }
            return r
        },
        emptyChildren() {
            return !!this.$slots.default
        }
    },
    methods: {
        handleMouseUp() {
            console.log('todo')
        },
        onAction() {
            this.$emit('click')
            this.$emit('action')
        }
    },
}
</script>
