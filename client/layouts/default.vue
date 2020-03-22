<template lang='pug'>
  v-app
    core-toolbar
    core-drawer
    core-view
</template>

<script>
export default {
  components: {
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreToolbar: () => import('@/components/core/Toolbar'),
    CoreView: () => import('@/components/core/View')
  },
  data () {
    return {}
  }
}
</script>
