<template>
  <v-container>
    <v-row class="authenticate-user">
        <v-col cols="12">
        <v-text-field
        label="Enter your email address"
        outlined
        v-model="email"
        ></v-text-field>
        </v-col>
        <v-col cols="12">
        <v-text-field
        type="password"
        label="Enter your password"
        outlined
        v-model="password"
        ></v-text-field>
        </v-col>
        <v-btn @click="authenticate" depressed
  elevation="10"
  color="secondary"
  outlined
  raised
  rounded>Login</v-btn>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'AuthenticateUser',

    data: () => ({
      email: '',
      password: ''
    }),
    mounted() {
        if (localStorage.fname) {
            this.email = localStorage.email;
            this.password = localStorage.password;
        }
    },
    methods: {
        authenticate() {
          const myObj = {
            email:  localStorage.email, 
            password:  localStorage.password
            };
            var myJSON = JSON.stringify(myObj);
            var authJSON;
            var authToken;
  // Send user email and password to obtain bearer token
      var authenticateSwagger = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: myJSON
    };
    fetch('https://grasperapi.azurewebsites.net/api/v1/Users/authenticate', authenticateSwagger)
        .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        else return Promise.reject(response);
        })
        .then(function(res) {
          authJSON = JSON.parse(JSON.stringify(res));
          authToken = authJSON.token;
          localStorage.authToken = authToken;
          console.log("Local: " + localStorage.authToken);
          return authJSON;
        })
        .then(function (data) {
          console.log(data);
        })
        .catch(function (error) {
          console.warn('Something went wrong', error);
        });
        console.log(authenticateSwagger);
  }
}
}
</script>
