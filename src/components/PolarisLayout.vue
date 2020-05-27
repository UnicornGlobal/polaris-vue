<template>
  <div class="Polaris-Layout">
    <template
      v-for="slot, name in $slots"
      v-if="sectioned"
    >
      <polaris-layout-section>
        <slot :name="name" />
      </polaris-layout-section>
    </template>
    <template
      v-for="slot, name in $slots"
      v-if="!sectioned"
    >
      <slot :name="name" />
    </template>
  </div>
</template>

<script>
export default {
    props: {
        sectioned: Boolean,
    }
}
</script>