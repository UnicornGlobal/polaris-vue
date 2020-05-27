<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
    polarisName: 'StackItem',
    props: {
        fill: Boolean
    },
    computed: {
        classes() {
            return {
                'Polaris-Stack__Item': true,
                'Polaris-Stack__Item--fill': this.fill
            }
        }
    }
}
</script>