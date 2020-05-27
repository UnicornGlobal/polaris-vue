<template>
  <div>
    <label
      :class="labelClasses"
      :for="id"
    >
      <span class="Polaris-Choice__Control">
        <slot v-if="!$slots.children">
          {{ children }}
        </slot>
        <slot name="children" />
      </span>
      <span class="Polaris-Choice__Label">
        {{ label }}
      </span>
    </label>
    <div
      v-if="typeof error === 'string' || helpText || $slots.helpText"
      class="Polaris-Choice__Descriptions"
    >
      <div
        v-if="typeof error === 'string'"
        :id="id+'Error'"
        class="Polaris-Choice__Error"
      >
        <div class="Polaris-Choice__ErrorIcon">
          <polaris-icon :source="alertIcon" />
          {{ error }}
        </div>
      </div>
      <div
        v-if="helpText || $slots.helpText"
        :id="id+'HelpText'"
        class="Polaris-Choice__HelpText"
      >
        <slot name="helpText">
          {{ helpText }}
        </slot>
      </div>
    </div>
  </div>
</template>


<script>
import alertIcon from '../resources/alert-icon.svg'

import ComponentHelpers from '../ComponentHelpers.js'

export default {
    props: {
        id: String,
        label: String,
        error: [String, Boolean],
        children: String,
        labelHidden: Boolean,
        helpText: String
    },
    data() {
        return {
            alertIcon: alertIcon
        }
    },
    computed: {
        labelClasses() {
            return ComponentHelpers.makeComponentClass('Polaris-Choice', [
                'labelHidden',
            ], this)
        }
    }
}
</script>