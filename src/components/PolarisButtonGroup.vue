<template>
  <div :class="classes">
    <slot />
    <polaris-button-group-item
      v-for="slot, name in $slots"
      v-if="name != 'default'"
      :key="name"
    >
      <slot :name="name" />
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