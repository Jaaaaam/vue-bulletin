import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  events: [
    {
      title: 'College Reunion',
      description: '7PM @ SMX Convention Center',
      date: '2017-06-09'
    },
    {
      title: 'Company Outing',
      description: '5AM meeting time @Starbucks BGC',
      date: '2017-06-09'
    }
  ]
}

const getters = {
  allEvents: state => state.events
}

export default new Vuex.Store({
  state,
  getters
})
