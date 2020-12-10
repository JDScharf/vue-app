<template>
  <v-container>
    <v-row class="register-user">
      <v-col cols="12">
        <v-text-field
        label="Enter your first name"
        outlined
        v-model="firstName"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
        label="Enter your last name"
        outlined
        v-model="lastName"
        ></v-text-field>
        </v-col>
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
        label="Create your password"
        outlined
        v-model="password"
        ></v-text-field>
        </v-col>
        <button @click="persist">Save</button>
        <button @click="send">Register</button>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'RegisterUser',

    data: () => ({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }),
    mounted() {
        if (localStorage.fname) {
            this.firstName = localStorage.firstName;
            this.lastName = localStorage.lastName;
            this.email = localStorage.email;
            this.password = localStorage.password;
        }
    },
    watch: {
        fname(newName) {
            localStorage.firstName = newName;
            localStorage.lastName = newName;
            localStorage.email = newName;
            localStorage.password = newName;
        }
    },
    methods: {
        persist() {
            localStorage.firstName = this.firstName;
            localStorage.lastName = this.lastName;
            localStorage.email = this.email;
            localStorage.password = this.password;
            console.log("firstName: " + this.firstName, "lastName: " + this.lastName, "email :" + this.email, "password: " + this.password);
        },
        submit() {
          var myObj = {
            firstName:  localStorage.firstName, 
            lastName:  localStorage.lastName, 
            email:  localStorage.email, 
            password:  localStorage.password
            };
          var myJSON = JSON.stringify(myObj);
          console.log(myJSON);
        },
    // POST request using fetch with set headers
        send() {
          var myObj = {
            firstName:  localStorage.firstName, 
            lastName:  localStorage.lastName, 
            email:  localStorage.email, 
            password:  localStorage.password
            };
    var myJSON = JSON.stringify(myObj);
    const sendToSwagger = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: myJSON
    };
    fetch('https://grasperapi.azurewebsites.net/api/v1/Users/register', sendToSwagger)
      .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        return Promise.reject(response);
        }).then(function (data) {
          console.log(data);
        }).catch(function (error) {
          console.warn('Something went wrong', error);
        });
      //  => response.json())
      //.then(data => this.postId = data.id);
      // const data = reponse.json()
      // return this.response.json();
      // console.log(data);
      // console.log(({myJSON}))
  }
}
}
</script>
