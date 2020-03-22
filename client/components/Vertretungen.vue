<template lang='pug'>
v-container(grid-list-xl="")
  v-layout(wrap="")
    v-list(dense)
      v-list-item-group(color="primary")
        v-list-item(v-for="(vertretung, i) in vertretungen" :key="i" :href="vertretung.value" target="_blank")
          v-list-item-icon
            v-img(:src="vertretung.img" width=50)
          v-list-item-content
            v-list-item-title(v-text="vertretung.label")
            v-list-item-subtitle(v-text="vertretung.name")
</template>

<script>
// Utilities
import { mapState } from 'vuex'

export default {
  name: 'Auslandsvertretungen',

  data: () => ({}),

  computed: {
    ...mapState(['vertretungen'])
  }
}
</script>
