<template>
  <div class="Polaris-ColorPicker">
    <div
      ref="palette"
      class="Polaris-ColorPicker__MainColor"
    >
      <div
        class="Polaris-ColorPicker__ColorLayer"
        :style="colorLayerStyle"
      />
      <polaris-color-picker-slidable
        :dragger-x="draggerX"
        :dragger-y="draggerY"
        @change="handleDraggerMove"
      />
    </div>
    <polaris-color-picker-hue-picker
      :hue="color.hue"
      @change="handleHueChange"
    />
    <polaris-color-picker-alpha-picker
      v-if="allowAlpha"
      :alpha="color.alpha"
      @change="handleAlphaChange"
    />
  </div>
</template>

<script>
import HSBColor from '../data/HSBColor.js'

import PolarisColorPickerAlphaPicker from './PolarisColorPickerAlphaPicker.vue'
import PolarisColorPickerHuePicker from './PolarisColorPickerHuePicker.vue'
import PolarisColorPickerSlidable from './PolarisColorPickerSlidable.vue'

export default {
    components: {
        PolarisColorPickerAlphaPicker,
        PolarisColorPickerHuePicker,
        PolarisColorPickerSlidable
    },
    model: {
        prop: 'color',
        event: 'change'
    },
    props: {
        color: {
            type: Object,
            default() {
                return new HSBColor(0, 1, 1, 1)
            }
        },
        allowAlpha: Boolean
    },
    data() {
        return {
            pickerSize: 0
        }
    },
    computed: {
        draggerX() {
            return Math.max(0, Math.min(this.pickerSize, this.color.saturation * this.pickerSize))
        },
        draggerY() {
            return Math.max(0, Math.min(this.pickerSize, this.pickerSize - (this.color.brightness * this.pickerSize)))
        },
        colorLayerStyle() {
            var hsbColor = new HSBColor(this.color.hue, this.color.saturation, this.color.brightness, this.color.alpha)
            var rgbColor = hsbColor.toRGB()
            return {
                background: rgbColor.toCssString()
            }
        }
    },
    mounted() {
        this.pickerSize = this.$refs.palette.clientWidth
    },
    methods: {
        handleHueChange(e) {
            var newColor = new HSBColor(
                e,
                this.color.saturation,
                this.color.brightness,
                this.color.alpha)

            this.$emit('change', newColor)
        },
        handleAlphaChange(e) {
            var newColor = new HSBColor(
                this.color.hue,
                this.color.saturation,
                this.color.brightness,
                e)

            this.$emit('change', newColor)
        },
        handleDraggerMove(e) {
            const saturation = Math.max(0, Math.min(1, e.x / this.pickerSize))
            const brightness = Math.max(0, Math.min(1, 1 - e.y / this.pickerSize))

            var newColor = new HSBColor(
                this.color.hue,
                saturation,
                brightness,
                this.color.alpha)

            this.$emit('change', newColor)
        }
    }
}
</script>
