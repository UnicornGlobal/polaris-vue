<template>
  <div :class="classes">
    <slot />
    <polaris-button-group-item
      v-for="(slot, name) in $slots"
      :key="name"
    >
      <slot
        v-if="name != 'default'"
        :name="name"
      />
    </polaris-button-group-item>
  </div>
</template>


<script>
import PolarisButtonGroupItem from './PolarisButtonGroupItem.vue'

export default {
    components: {
        PolarisButtonGroupItem
    },
    props: {
        segmented: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-ButtonGroup': true,
                'Polaris-ButtonGroup--segmented': this.segmented
            }
        }
    }
}
</script>
