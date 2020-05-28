<template>
  <transition
    name="PolarisVue-CollapseTransition"
    enter-active-class="PolarisVue-CollapseTransition--show"
    leave-active-class="PolarisVue-CollapseTransition--show"
    enter-class="PolarisVue-CollapseTransition--hide"
    leave-to-class="PolarisVue-CollapseTransition--hide"
    >
    <slot />
  </transition>
</template>

<style lang="scss">
  .PolarisVue-CollapseTransition--show {
    transition: height 0.5s;
  }

  .PolarisVue-CollapseTransition--hide {
    height: 0;
    overflow: hidden;
  }
</style>
