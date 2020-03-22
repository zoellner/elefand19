<template lang='pug'>
  v-container#auslandsvertretungen
    aktuelle-lage
    vertretungen
</template>

<script>
import Vertretungen from '~/components/Vertretungen.vue'
import AktuelleLage from '~/components/AktuelleLage.vue'

export default {
  name: 'Auslandsvertretungen',

  components: {
    AktuelleLage,
    Vertretungen
  }
}
</script>
