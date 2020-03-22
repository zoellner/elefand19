<template lang="pug">
  v-app-bar(flat)
    v-app-bar-nav-icon.hidden-md-and-up(@click="toggleDrawer")
    v-container(mx-auto py-0)
      v-layout
        v-btn.ml-0.hidden-sm-and-down(
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          text
          @click="onClick($event, link)"
          nuxt
        ) {{ link.text }}
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  computed: {
    ...mapGetters(['links'])
  },

  methods: {
    ...mapMutations(['toggleDrawer']),
    onClick (e, item) {
      e.stopPropagation()

      if (item.to || !item.href) { return }

      this.$vuetify.goTo(item.href)
    }
  }
}
</script>
