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

      <!-- add an event form -->
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>Add an Event</h3>
          </div>
          <div class="panel-body">

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

            <button class="btn btn-xs btn-danger">Delete</button>
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
  computed: mapGetters({
    events: 'allEvents'
  })
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
