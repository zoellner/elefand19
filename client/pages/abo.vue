<template lang='pug'>
  v-container#abo
    h1 Achtung: Prototyp. Abonnieren funktioniert derzeit noch nicht.
    v-card(v-if="!submitted")
      v-card-title Nachrichten abonnieren
      v-card-text
        | Wählen sie die gewünschten Kategorien aus
      v-container
        v-checkbox(v-for="category of categories" :key="category" v-model="selected" :label="category" :value="category")
        v-text-field(:value="subscriptionEmail" @input="updateEmail" label="Email-Adresse" type="email")
        v-btn(type="submit" @click='submit') Abonnieren
    v-card(v-if="submitted")
      v-card-title Vielen Dank für ihr Abo
      v-card-text
       | Sie werden relevante Nachrichten der Kategorien {{selected.join(', ')}} per Email an {{subscriptionEmail}} erhalten.
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'Abo',

  data: () => ({
    selected: [],
    submitted: false
  }),

  computed: {
    ...mapGetters(['categories']),
    ...mapState(['subscriptionEmail'])
  },
  methods: {
    updateEmail (email) {
      this.$store.commit('updateEmail', email)
    },
    submit () {
      this.submitted = true
    }
  }
}
</script>
