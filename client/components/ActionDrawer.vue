<template lang="pug">
  v-navigation-drawer(app fixed right)
    v-flex(xs12)
      v-card
        v-card-text
          p.display-1.text--primary
            | Email Abonierung
          .text--primary
            | Melden Sie sich hier an um automatisch über die neusten Nachrichten informiert zu werden.
        v-list
          v-list-item
            v-text-field(:value="subscriptionEmail" @input="updateEmail" label="Email-Adresse" type="email")
        v-card-actions
          v-btn(text color="deep-purple accent-4" @click="continueSubscription()")
            | Abonnieren
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'ActionDrawer',
  data: () => ({
    email: null
  }),
  computed: {
    ...mapState(['subscriptionEmail'])
  },
  methods: {
    updateEmail (email) {
      this.$store.commit('updateEmail', email)
    },
    continueSubscription () {
      this.$router.push('/abo')
    }
  }
}
</script>
