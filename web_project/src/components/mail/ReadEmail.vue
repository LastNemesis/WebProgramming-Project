<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
  <div class="contentMail" v-if="this.$store.state.userName !='Nobody is logged at the moment'">
  
    <!-- DISPLAYS BUTTON THAT ALLOW THE USER TO LOAD THEIR MAIL-->
    <div v-if="this.mail!=null">
      <BaseButton class="load" @click="getMail">
        Load your mails
      </BaseButton>
    </div>

    <!-- DISPLAYS THEIR MAIL-->
    <div v-else>
      
      <table id="secondTable">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col">{{col}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row">
            <td v-for="col in columns" :key="col">{{row[col]}}</td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import {graphConfig} from '../../lib/microsoftLogIn'

import BaseButton from '../button/BaseButton.vue'

export default {
    name: 'ReadEmail',

    components:{
      BaseButton
    },

    data () {
      return {
        mail: null,
        columns: ['Object', 'Date', 'Sender/From', 'Bodypreview'],
        rows: {'Object':'1', 'Date':'1', 'Sender/From':'1', 'Bodypreview':'1'},
      }
    },

    methods:{
      getMail(){
        const Msal = this.$store.state.MySALObj;
        this.callMsGraph(graphConfig.graphMailEndpoint, Msal.accessToken);
      },

      callMsGraph(url, accesToken){
        
        window.fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + accesToken
          }
        })
        .then(this.checkJSON)
        .then(this.updateUI)
        .catch(error => console.log("ERROR: ", error))

        //top
      },

      checkJSON(response){
        return response.ok ? response.json() : Promise.reject(response.json())
      },

      updateUI(response){
        this.mail = response
      }
    }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.load{
    min-width: 150px;
    min-height: 40px;
}

table {
  color: white;
  font: bold 20px/1 sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #4a8260;
  margin: 10px 10px 0 10px;
  width: 99%;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #2a7a53;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  font: 15px/1 sans-serif;
  padding: 8px;
  border-right: 2px solid #6da18c;
}

table td:last-child {
  border-right: none;
}

table tbody tr:nth-child(2n) td {
  background: #9dc0af;
}

</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->