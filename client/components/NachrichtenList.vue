<template lang='pug'>
  #nachrichten-list
    v-select(v-model="filterCategory" :items="categories" filled label="Nachrichten filtern")
    v-row(dense)
      v-col(v-for="(nachricht, i) in filtered" :key="i" cols=6)
        v-card.mx-auto
          v-card-text
            div {{nachricht.date}}
            p.display-1.text--primary
              | {{nachricht.title}}
            .text--primary
              | {{nachricht.body}}
          v-card-actions
            v-btn(text="" color="deep-purple accent-4" :href="nachricht.value" target="_blank")
              | Learn More
</template>

<script>
// Utilities
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Nachrichten',

  data: () => ({
    filterCategory: 'Alle Nachrichten'
  }),

  computed: {
    ...mapState(['nachrichten']),
    ...mapGetters(['categories']),
    filtered () {
      return this.nachrichten.filter((nachricht) => {
        if (this.filterCategory === 'Alle Nachrichten') { return true }
        return nachricht.category === this.filterCategory
      })
    }
  }
}
</script>
