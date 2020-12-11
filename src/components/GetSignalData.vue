<template>
  <v-container>
    <v-row class="get-signal-data">
        <v-btn @click="getSignalData1" depressed
  elevation="2"
  color="secondary"
  outlined
  raised
  rounded>Get Alarm Signal Data</v-btn>
    </v-row>
     <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Alarm Number
          </th>
          <th class="text-left">
            Event Code Description
          </th>
          <th class="text-left">
            Point Description
          </th>
          <th class="text-left">
            Signal Code
          </th>
          <th class="text-left">
            Xmit
          </th>
          <th class="text-left">
            Site Date
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="items of signalData.items"
          :key="items"
        >
          <td>{{ items.alarmNum }}</td>
          <td>{{ items.eventCodeDesc }}</td>
          <td>{{ items.pointDesc }}</td>
          <td>{{ items.signalCode }}</td>
          <td>{{ items.xmit }}</td>
          <td>{{ items.siteDate.toLocaleString() }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
        console.log(bearerToken);
  }
}
}
</script>

<style scoped>
</style>