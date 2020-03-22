<template lang='pug'>
  v-container(grid-list-xl="")
    v-layout(wrap="")
      v-skeleton-loader(:loading='loading' type='list-item,list-item,list-item,list-item,list-item')
        v-expansion-panels
          v-expansion-panel(v-for="warnung of warnungen" :key="warnung.id")
            v-expansion-panel-header {{warnung.date}} - {{warnung.title}}
            v-expansion-panel-content
              div(v-html="warnung.content")

</template>

<script>
import parser from 'rss-parser-browser'

export default {
  name: 'Reisewarnungen',

  async fetch () {
    this.warnungen = await new Promise((resolve, reject) => {
      parser.parseURL('https://www.auswaertiges-amt.de/static/appdata/includes/rss/Reisehinweise-RSS-Feed.xml', function (err, parsed) {
        if (err) { return reject(err) }
        const warnungen = parsed.feed.entries.map(entry => ({
          id: entry.guid,
          title: entry.title,
          snippet: entry.contentSnippet,
          content: entry.content.replace(/img src/g, 'img width="150" src'),
          link: entry.link,
          date: new Date(entry.isoDate).toLocaleDateString()
        }))
        return resolve(warnungen)
      })
    })
    this.loading = false
  },

  data () {
    return {
      loading: true,
      warnungen: null
    }
  }
}
</script>
