<template>
  <v-container>
    <v-row class="get-signal-data">
        <button @click="getSignalData1">Get Alarm Signal Data</button>
    </v-row>
     <ul id="signal-data">
        <li v-for="items of signalData.items" :key="items">
            Alarm Number: {{ items.alarmNum }},  
            Event Code Description: {{ items.eventCodeDesc }}
            Point Description: {{ items.pointDesc }},
            Signal Code: {{ items.signalCode }}
            Xmit: {{ items.xmit }}
            Site Date: {{items.siteDate.toLocaleString() }}
        </li>
    </ul>
  </v-container>
</template>

<script>
  export default {
    name: 'GetSignalData',

    data: () => ({
        signalData: []
    }),
    methods: {
        getSignalData1() {
            const bearerToken = {
            Bearer:  token, 
            };
      var token = localStorage.authToken;
      var signalJSON = '';
      var getSignalData = {
      method: 'GET',
      headers: { 
         Accept: 'text/plain',
         Authorization: 'Bearer '+ token
      },
    };
    fetch('https://grasperapi.azurewebsites.net/api/v1/Signals?Limit=10', getSignalData)
        .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        else return Promise.reject(response);
        })
        .then(function(res) {
          signalJSON = JSON.parse(JSON.stringify(res));
          console.log(signalJSON);
          return signalJSON;
        })
        .then(data => {
            this.signalData = data
            console.log(data);
        })
        .catch(function (error) {
          console.warn('Something went wrong', error);
        });
        console.log(getSignalData);
        console.log(bearerToken);
  }
}
}
</script>

<style scoped>
</style>