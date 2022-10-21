<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
  <div class="contentMail" v-if="this.$store.state.userName !='Nobody is logged at the moment'">
  
    <!-- DISPLAYS BUTTON THAT ALLOW THE USER TO LOAD THEIR MAIL-->
    <div v-if="this.mail==null">
      <BaseButton class="load" @click="getMail">
        Load your mails
      </BaseButton>
    </div>

    <!-- DISPLAYS THEIR MAIL-->
    <div v-else>
      
      <table id="Table">

        <thead>
          <tr>
            <th v-for="col in columns" :key="col">{{col}}</th>
          </tr>
        </thead>

        <tbody>

          <tr v-for="row in mailLenght" :key="row">

            <td v-for="col in columns" :key="col">
              
              {{ displayer(row, col) }}

            </td>

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

        mailLenght: 0,

        count: 0,

        columns: ['Object', 'Sender/From', 'Bodypreview', 'Date'],

        titleMail : {'Object':'subject', 'Sender/From':'sender', 'Bodypreview':'bodyPreview', 'Date':'receivedDateTime'},

        rows: {'Object':'Object', 'Sender/From':'sender', 'Bodypreview':'bodyPreview', 'Date':'receivedDateTime'}
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
        //console.log(response)
        this.mail = response
        this.mailLenght = Object.keys(response).length
        //console.log(this.mailLenght)
      },

      displayer(row, col){

        // Verifying for the sender
        if(col == 'Sender/From') {
          console.log("test")
          console.log(this.mail?.value[row]?.from)
          
          // if FROM is undefined
          if (this.mail?.value[row]?.from){
            return this.mail.value[row][ 'from' ][ 'emailAddress' ][ 'address' ]
          }

          // if SENDER is undefined
          if (this?.mail?.value[row]?.sender){
            return this.mail.value[row][ 'sender' ][ 'emailAddress' ][ 'address' ]
          }

          // if BOTH are undefined
          return 'Undefined sender'
        }

        // Giving the value from the JSON mail in other cases
        return this.mail.value[row][ this.titleMail[col] ]
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