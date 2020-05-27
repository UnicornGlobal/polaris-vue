<template>
  <fieldset :class="classes">
    <legend
      v-if="title"
      class="Polaris-ChoiceList__Title"
    >
      {{ title }}
    </legend>
    <ul class="Polaris-ChoiceList__Choices">
      <li
        v-for="(choice, key) in choices"
        :key="key"
      >
        <polaris-checkbox
          v-if="allowMultiple"
          :name="finalName"
          :value="choice.value"
          :label="choice.label"
          :help-text="choice.helpText"
          :disabled="disabled"
          :checked="choiceIsSelected(choice)"
          @change="handleChange($event, choice)"
        />
        <polaris-radio-button
          v-else
          :name="finalName"
          :value="choice.value"
          :label="choice.label"
          :help-text="choice.helpText"
          :disabled="disabled"
          :checked="choiceIsSelected(choice)"
          @change="handleChange($event, choice)"
        />
      </li>
    </ul>
  </fieldset>
</template>

<script>
import PolarisCheckbox from './PolarisCheckbox.vue'
import PolarisRadioButton from './PolarisRadioButton.vue'

import ComponentHelpers from '../ComponentHelpers.js'

export default {
    components: {
        PolarisCheckbox,
        PolarisRadioButton
    },
    model: {
        prop: 'selected',
        event: 'change'
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      titleHidden: {
        type: Boolean,
        default: false
      },
      choices: {
        type: Array,
        default() { return [] }
      },
      selected: {
        type: Array,
        default() { return [] }
      },
      name: {
        type: String,
        default: ''
      },
      allowMultiple: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
        finalName() {
            return this.allowMultiple ? this.name + '[]' : this.name
        },
        classes() {
            return ComponentHelpers.makeComponentClass('Polaris-ChoiceList', [
                'titleHidden',
            ], this)
        }
    },
    methods: {
        choiceIsSelected(choice) {
            if (!this.selected) { return false }
            return this.selected.indexOf(choice.value) >= 0
        },
        handleChange(e, choice) {
            var newSelected = []


            if (e) {
                if (this.allowMultiple) {
                    newSelected = (this.selected || []).slice()
                    newSelected.push(choice.value)
                } else {
                    newSelected = [choice.value]
                }
            } else {
                newSelected = (this.selected || []).slice().filter((item) => {
                    return item !== choice.value
                })
            }

            this.$emit('change', newSelected)
        }
    }

}
</script>
