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

const mutations = {
  addEvent (state, eventItem) {
    var events = state.events
    events.push(eventItem)
  },
  removeEvent (state, eventItem) {
    var events = state.events
    events.splice(events.indexOf(eventItem), 1)
  }
}

const actions = {
  addEvent ({commit}, eventItem) {
    commit('addEvent', eventItem)
    console.log(eventItem)
  },
  removeEvent ({commit}, eventItem) {
    commit('removeEvent', eventItem)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
