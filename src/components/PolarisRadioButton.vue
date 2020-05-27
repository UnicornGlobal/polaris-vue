<template>
  <polaris-choice
    :id="realId"
    :label="label"
    :label-hidden="labelHidden"
    :help-text="helpText"
  >
    <template
      v-if="$slots.helpText"
      slot="helpText"
    >
      <slot name="helpText" />
    </template>

    <div class="Polaris-RadioButton">
      <input
        :id="realId"
        :name="name"
        :value="value"
        type="radio"
        :checked="checked"
        :disabled="disabled"
        class="Polaris-RadioButton__Input"
        :aria-describedby="helpText ? id+'HelpText' : ''"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      >

      <div class="Polaris-RadioButton__Backdrop" />
      <div class="Polaris-RadioButton__Icon" />
    </div>
  </polaris-choice>
</template>

<script>
import PolarisChoice from './PolarisChoice.vue'

export default {
    components: {
        PolarisChoice,
    },
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        label: String,
        labelHidden: Boolean,
        helpText: String,
        checked: Boolean,
        id: String,
        name: String,
        value: String,
        disabled: Boolean
    },
    computed: {
        realId() {
            return this.id || 'PolarisRadioButton'+this._uid
        }
    },
    methods: {
        onChange(e) {
            var target = e.target || e.srcElement
            this.$emit('change', target.checked)
        },
        onFocus() {
            this.$emit('focus')
        },
        onBlur() {
            this.$emit('blur')
        }
    }
}
</script>