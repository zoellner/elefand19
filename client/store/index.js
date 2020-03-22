
export const state = () => ({
  vertretungen: require('@/data/vertretungenausland.json'),
  nachrichten: require('@/data/nachrichten.json'),
  subscriptionEmail: null,
  drawer: false,
  items: [
    {
      text: 'Home',
      to: '/'
    },
    {
      text: 'Über COVID-19',
      to: '/covid19'
    },
    {
      text: 'Reisewarnungen',
      to: '/reisewarnungen'
    },
    {
      text: 'Auslandsvertretungen',
      to: '/auslandsvertretungen'
    }
    // {
    //   text: 'About',
    //   href: '#about'
    // }
  ]
})

export const getters = {
  links: state => state.items,
  categories: (state) => {
    const all = new Set(['Alle Nachrichten'])
    state.nachrichten.forEach(nachricht => all.add(nachricht.category))
    return [...all]
  }
}

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
  updateEmail (state, email) {
    state.subscriptionEmail = email
  }
}

export const actions = {

}
