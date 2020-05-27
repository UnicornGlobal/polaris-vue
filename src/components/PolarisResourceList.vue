<template>
  <ul class="Polaris-ResourceList">
    <li
      v-for="(item, index) in items"
      :key="`item_${index}`"
      class="Polaris-ResourceList__ItemWrapper"
    >
      <slot
        name="item"
        :item="item"
        :index="index"
      >
        <polaris-resource-list-item
          :url="item.url"
          :media="item.media"
          :attribute-one="item.attributeOne"
          :attribute-two="item.attributeTwo"
          :attribute-three="item.attributeThree"
          :badges="item.badges"
          :exceptions="item.exceptions"
          :actions="item.actions"
          :persist-actions="item.persistActions"
        />
      </slot>
    </li>
  </ul>
</template>

<script>
import PolarisResourceListItem from './PolarisResourceListItem.vue'
export default {
    components: {
        PolarisResourceListItem,
    },
    props: {
        items: {
            type: Array,
            default() {
                return []
            },
        },
        selectedItems : {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
    },
    created: function() {
        console.log( this )
    },
    methods: {
        setSelectedItems(index, value) {
            console.log( "set selected items happened" )
            console.log( index )
            console.log(value)
            this.value = value
        }
    }
}
</script>
