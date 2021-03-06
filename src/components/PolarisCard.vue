<template>
  <div :class="classes">
    <div
      v-if="title || actions.length > 0"
      class="Polaris-Card__Header"
    >
      <polaris-stack
        alignment="leading"
        distribution="equalSpacing"
      >
        <slot name="title">
          <polaris-stack-item
            v-if="title"
            fill
          >
            <h2 class="Polaris-Heading">
                {{ title }}
            </h2>
          </polaris-stack-item>
        </slot>
        <slot name="actions">
          <polaris-stack-item>
            <polaris-button-group>
              <polaris-button
                v-for="(action, index) in actions"
                :key="index"
                :slot="index"
                :url="action.url"
                :destructive="action.destructive"
                :disabled="action.disabled"
                :accessibility-label="action.accessiblityLabel"
                :icon="action.icon"
                plain
                @click="handleAction(action)"
              >
                {{ action.content }}
              </polaris-button>
            </polaris-button-group>
          </polaris-stack-item>
        </slot>
      </polaris-stack>
    </div>
    <template v-if="!sectioned">
      <slot />
    </template>
    <template v-if="sectioned">
      <polaris-card-section>
        <slot />
      </polaris-card-section>
    </template>
    <div
      v-if="primaryFooterAction"
      class="Polaris-Card__Footer"
    >
      <polaris-button-group>
        <template v-if="primaryFooterAction">
          <polaris-button
            slot="1"
            primary
            :accessibility-label="primaryFooterAction.accessibilityLabel"
            :url="primaryFooterAction.url"
            :disabled="primaryFooterAction.disabled"
            :destructive="primaryFooterAction.destructive"
            :icon="primaryFooterAction.icon"
            @click="handleAction(primaryFooterAction)"
          >
            {{ primaryFooterAction.content }}
          </polaris-button>
        </template>
        <template v-if="secondaryFooterAction">
          <polaris-button
            slot="2"
            :accessibility-label="secondaryFooterAction.accessibilityLabel"
            :url="secondaryFooterAction.url"
            :disabled="secondaryFooterAction.disabled"
            :destructive="secondaryFooterAction.destructive"
            :icon="secondaryFooterAction.icon"
            @click="handleAction(secondaryFooterAction)"
          >
            {{ secondaryFooterAction.content }}
          </polaris-button>
        </template>
      </polaris-button-group>
    </div>
  </div>
</template>


<script>
import PolarisButton from './PolarisButton.vue'
import PolarisCardSection from './PolarisCardSection.vue'
import PolarisButtonGroup from './PolarisButtonGroup.vue'

export default {
  components: {
    PolarisButton,
    PolarisButtonGroup,
    PolarisCardSection,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subdued: {
      type: Boolean,
      default: false
    },
    sectioned: {
      type: Boolean,
      default: false
    },
    primaryFooterAction: {
      type: [Object, Boolean],
      default() {
        return false
      }
    },
    secondaryFooterAction: {
      type: [Object, Boolean],
      default() {
        return false
      }
    },
    actions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    classes() {
      return {
        'Polaris-Card': true,
        'Polaris-Card--subdued': this.subdued
      }
    }
  },
  methods: {
    handleAction(action) {
      if (action.onAction) {
        action.onAction()
      }
    }
  }
}
</script>
