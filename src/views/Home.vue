<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/Salt-City-Security.png')"
          class="my-3"
          contain
          height="300"
        />
        <H1> This is sample text </H1><br>
        <H3> This is a sub-paragraph </H3>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
//    HelloWorld
  }
}
</script>
