<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    },
    on: {
      type: Object,
      default() {
        return {}
      }
    },
    value: {
      type: [String, Number],
      default: ''
    },
  },
  methods: {
    blur() {
      this.$refs.element.blur()
    },
    focus() {
      this.$refs.element.focus()
    }
  },
  render(createElement) {
    return createElement(this.tag, {
      on: this.on,
      domProps: {
        value: this.value,
      },
      ref: 'element'
    }, this.$slots.default)
  }
}
</script>
