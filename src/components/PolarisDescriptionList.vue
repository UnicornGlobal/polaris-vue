<template>
  <dl class="Polaris-DescriptionList">
    <template v-for="(item, key) in items">
      <dt
        :key="key"
        class="Polaris-DescriptionList__Term"
      >
        {{ item.term }}
      </dt>
      <dd
        :key="key"
        class="Polaris-DescriptionList__Description"
      >
        {{ item.description }}
      </dd>
    </template>
  </dl>
</template>


<script>
export default {
    props: {
        items: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
