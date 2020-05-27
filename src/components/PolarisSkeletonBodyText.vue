<template>
  <div class="Polaris-SkeletonBodyTextContainer">
    <div
      v-for="i in lines"
      :key="i"
      class="Polaris-SkeletonBodyText"
    />
  </div>
</template>

<script>
export default {
    props: {
        lines: {
            type: Number,
            default: 3
        },
    },
}
</script>
