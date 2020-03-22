<template lang='pug'>
  v-container#home
    project-logo
    aktuelle-lage
    nachrichten-list
    action-drawer
</template>

<script>
import ProjectLogo from '~/components/ProjectLogo.vue'
import AktuelleLage from '~/components/AktuelleLage.vue'
import NachrichtenList from '~/components/NachrichtenList.vue'
import ActionDrawer from '~/components/ActionDrawer.vue'

export default {
  name: 'Home',

  components: {
    ProjectLogo,
    AktuelleLage,
    ActionDrawer,
    NachrichtenList
  }
}
</script>
