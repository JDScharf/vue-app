<template>
  <v-app>
    <v-main>
      <HelloWorld/>
      <RegisterUser/>
      <AuthenticateUser/>
      <GetSignalData/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import RegisterUser from './components/RegisterUser';
import AuthenticateUser from './components/AuthenticateUser';
import GetSignalData from './components/GetSignalData';

export default {
  name: 'App',
  computed: {
    theme(){
      return (this.$vuetify.theme.dark)
    }
  },

  components: {
    HelloWorld,
    RegisterUser,
    AuthenticateUser,
    GetSignalData,
  },

  data: () => ({
    //
  }),
};
</script>
