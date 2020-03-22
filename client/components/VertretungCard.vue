<template lang='pug'>
v-flex(xs12="" :class="classes")
  base-card(height=250 color="grey lighten-1" dark :href="value.value")
    v-img(:src="value.img" height="100%" gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)")
      v-layout(fill-height="" wrap="" text-xs-right="" ma-0="")
        v-flex(xs12="")
          v-chip.mx-0.mb-2.text-uppercase(label="" color="grey darken-3" text-color="white" small="" @click.stop="")
            | {{ value.label }}
          h3.title.font-weight-bold.mb-2
            | {{ value.name }}
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    value: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    classes () {
      return {
        md6: this.size === 2,
        md4: this.size === 3
      }
    }
  }
}
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
