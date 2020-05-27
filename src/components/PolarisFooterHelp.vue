<template>
  <div class="Polaris-FooterHelp">
    <div class="Polaris-FooterHelp__Content">
      <div class="Polaris-FooterHelp__Icon">
        <polaris-icon
          source="help"
          color="teal"
          backdrop
        />
      </div>
      <div class="Polaris-FooterHelp__Text">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import helpIcon from '../resources/footer-help.svg'
import PolarisIcon from './PolarisIcon.vue'

export default {
  components: {
    PolarisIcon,
  },
  data() {
    return {
      helpIcon: helpIcon
    }
  }
}
</script>
