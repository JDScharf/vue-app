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
        label="Create your password"
        outlined
        v-model="password"
        ></v-text-field>
        </v-col>
        <button @click="submit">Submit</button>
        <button @click="authenticate">Authenticate</button>
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
    watch: {
        fname(newName) {
            localStorage.email = newName;
            localStorage.password = newName;
        }
    },
    methods: {
        persist() {
            localStorage.email = this.email;
            localStorage.password = this.password;
            console.log("email :" + this.email, "password: " + this.password);
        },
        submit() {
          var myObj = { 
            email:  localStorage.email, 
            password:  localStorage.password
            };
          var myJSON = JSON.stringify(myObj);
          console.log(myJSON);
        },
        authenticate() {
          const myObj = {
            email:  localStorage.email, 
            password:  localStorage.password
            };
            var myJSON = JSON.stringify(myObj);
            var authJSON;
            var authToken;
  // Code that authenticates 12/08/2020
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

  // Code that posts the users email and password to swagger app to authenticate it (12/07/2020)
  /*
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
        return Promise.reject(response);
        })
        .then(function (data) {
          console.log(data);
        }).catch(function (error) {
          console.warn('Something went wrong', error);
        });
        console.log(authenticateSwagger);
  }
}
}
*/
    // POST request using fetch with set headers
    //      var authJSON = '';
    //        var myBearerToken = objRespones.token;
    //        var bearerToken;
    // var data = this.postId = data.id;
// I tried to follow Youtube video at https://www.youtube.com/watch?v=uxf0--uiX0I  12/07/2020
/*
      const api_url = 'https://grasperapi.azurewebsites.net/api/v1/Users/authenticate';
      async function getAuthJSON() {
        const response = await fetch(api_url);
        method: 'POST';
        headers: { 
        'Content-Type', 'application/json'
      }
        body: myJSON
        const data = await response.json();
        console.log(data)
      }
      getAuthJSON();
  }
}
*/
// Tried to follow Mozilla docs at https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 12/07
/*
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }

    postData('https://grasperapi.azurewebsites.net/api/v1/Users/authenticate', { myObj })
      .then(data => {
        console.log(data);
      });
  }
}
}
*/

    /*    .then(response => response.json())
        .then(data => bearerToken = data)
        .then(() => console.log(bearerToken))
    */
        //  localStorage.setItem("bearerToken", response.json);
        //  var myToken = JSON.parse(this.response.json);
        //  console.log(myToken);
        //  const btoken = response.json();
        //  console.log(btoken)
        /*  .then(
          function(json){
            console.log(json);
          }
        )
        */
        /* .then(
          function(json){
            jsondata = json;
          }
        )
        */

      /*  var myAuth = authenticateSwagger;
        var myAuthParsed = JSON.parse(myAuth);
        var myToken = myAuthParsed.token;
      */
      //  var authOBJ = authenticateSwagger.token;
      //  var objResponse = JSON.parse(authenticateSwagger);
      //  console.log(objResponse);
      //  => response.json())
      //.then(data => this.postId = data.id);
      // const data = reponse.json()
      // return this.response.json();
      // console.log(data);
      // console.log(({myJSON}))
</script>
