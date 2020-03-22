<template lang='pug'>
  v-container#reisewarnungen
    aktuelle-lage
    h1 Reisewarnungen
    reisewarnungen-list
</template>

<script>
import ReisewarnungenList from '~/components/ReisewarnungenList.vue'
import AktuelleLage from '~/components/AktuelleLage.vue'

export default {
  name: 'Reisewarnungen',

  components: {
    AktuelleLage,
    ReisewarnungenList
  }
}
</script>
