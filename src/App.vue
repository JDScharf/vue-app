<template>
  <v-app>
      <p>
      <v-img
          :src="require('./assets/Salt-City-Security.png')"
          class="my-3"
          contain
          height="250"
        />
      <v-btn elevation="2"
  color="primary"
  outlined
  >
      <router-link to="/RegisterUser">Register User</router-link>
      </v-btn>
      <v-btn elevation="2"
  color="primary"
  outlined
  >
      <router-link to="/AuthenticateUser">Login</router-link>
      </v-btn>
      <v-btn elevation="2"
  color="primary"
  outlined>
      <router-link to="/GetSignalData">Get Signal Data</router-link>
      </v-btn>
      </p>
    <v-content>
    <router-view/>
    </v-content>
  </v-app>
</template>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #913d0d;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #e47e2b;
    }
  }
}
</style>

