<template>
  <transition
    name="PolarisVue-FadeUpTransition"
    enter-active-class="PolarisVue-FadeUpTransition--show"
    leave-active-class="PolarisVue-FadeUpTransition--show"
    enter-class="PolarisVue-FadeUpTransition--hide"
    leave-to-class="PolarisVue-FadeUpTransition--hide"
  >
    <slot />
  </transition>
</template>

<style lang="scss">
  .PolarisVue-FadeUpTransition--show {
      transition: opacity 0.5s, transform 0.5s;
  }

  .PolarisVue-FadeUpTransition--hide {
      opacity: 0;
      transform: translateY(30px);
  }
</style>
