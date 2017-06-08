<template>
  <div id="wrapper">
    <!-- <img src="./assets/logo.png">
    <router-view></router-view> -->

    <!-- navigation bar -->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand"><i class="glyphicon glyphicon-bullhorn"></i> Vue Events Bulletin Board</a>
      </div>
    </nav>

    <!-- main body of our application -->
    <div class="container" id="events">

      <div class="jumbotron">
        <h2>Bulletin Events Board</h2>
      </div>

      <!-- add an event form -->
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Add an Event</h3>
          </div>
          <div class="panel-body">
            <input class="form-control" placeholder="Event Name" v-model="eventItem.title">
            <br>
            <textarea class="form-control" rows="3" cols="80" placeholder="Event Details" v-model="eventItem.description"></textarea>
            <br>
            <input class="form-control" placeholder="Date" v-model="eventItem.date">
            <br>
            <button type="button" name="button" class="btn btn-primary" @click="addEvent(eventItem)">Add Event</button>
          </div>

        </div>
      </div>

      <!-- show the events -->
      <div class="col-sm-6">
        <div class="list-group">
          <a href="#" class="list-group-item" v-for="eventItem in events">
            <h4 class="list-group-item-heading">
              <i class="glyphicon glyphicon-bullhorn"></i>
              {{ eventItem.title }}
            </h4>

            <h5>
              <i class="glyphicon glyphicon-calendar"></i>
              {{ eventItem.date }}
            </h5>

            <p class="list-group-item-text"> {{ eventItem.description }} </p>

            <button class="btn btn-xs btn-danger" @click="removeEvent(eventItem)">Delete</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      eventItem: {
        title: '',
        description: '',
        date: ''
      }
    }
  },
  computed: mapGetters({
    events: 'allEvents'
  }),
  methods: {
    addEvent: function (eventItem) {
      this.$store.dispatch('addEvent', eventItem)
    },
    removeEvent: function (eventItem) {
      this.$store.dispatch('removeEvent', eventItem)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
