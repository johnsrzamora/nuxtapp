export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as Chart } from '../..\\components\\Chart\\index.vue'
export { default as InformationCards } from '../..\\components\\InformationCards\\index.vue'
export { default as Navigation } from '../..\\components\\Navigation\\index.vue'
export { default as NavMain } from '../..\\components\\NavMain\\index.vue'
export { default as NavSkills } from '../..\\components\\NavSkills\\index.vue'
export { default as Sections } from '../..\\components\\Sections\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
