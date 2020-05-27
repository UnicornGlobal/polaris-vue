<template>
  <div class="Polaris-Layout">
    <template v-if="sectioned">
      <polaris-layout-section
        v-for="(slot, name) in $slots"
        :key="name"
      >
        <slot :name="name" />
      </polaris-layout-section>
    </template>
    <template v-else>
      <slot
        v-for="(slot, name) in $slots"
        :name="name"
      />
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
