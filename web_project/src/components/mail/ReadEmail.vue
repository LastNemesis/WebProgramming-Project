<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
  <div class="contentMail" v-if="this.$store.state.userName !='Nobody is logged at the moment'">
  
    <!-- DISPLAYS BUTTON THAT ALLOW THE USER TO LOAD THEIR MAIL-->
    <div v-if="this.mail==null" class = "Centered">
      <BaseButton class="load" @click="getMail">
        Load your mails
      </BaseButton>

      &emsp;
    </div>

    <!-- DISPLAYS THEIR MAIL-->
    <div v-else>
      <div class = "input">
        Number of emails to display: 
        <select v-model="this.selected" class="nbMailDisplayInput">
          <option disabled value="">Number of emails to display</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>

        &emsp;

        <input v-model="this.searchK" placeholder="Search by keyword" />

        &emsp;

        <input v-model="this.searchS" placeholder="Search by sender" />

        &emsp;

        <input v-model="this.searchDT" placeholder="Search by Date" />

        &emsp;

        <BaseButton class="reload" @click="getMail">
          Reload Mails
        </BaseButton>

        <BaseButton class="research" @click="researchMail">
          Research in Mails
        </BaseButton>
      </div>

      <div v-if="this.Key == null">

        <table id="Table">

          <thead>
            <tr>
              <th v-for="col in columns" :key="col">{{col}}</th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="row in selected" :key="row">

              <td v-for="col in columns" :key="col">
                
                {{ displayer(row, col) }}
                <!-- {{ displayerX(row, col) }} -->

              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <div v-if="this.Key == 1">

        <table id="Table">

          <thead>
            <tr>
              <th v-for="col in columns" :key="col">{{col}}</th>
            </tr>
          </thead>

          <tbody>

            <tr v-for="row in selectedF" :key="row">

              <td v-for="col in columns" :key="col">
                
                {{ displayerF(row, col) }}

              </td>

            </tr>

          </tbody>

        </table>

        </div>
      
      <div class="Next">
        <BaseButton class="load" @click="getNextMail">
          Next {{selected}} mails
        </BaseButton>
      </div>
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

        filteredmail: null,

        mails: [],

        index: 0,

        selected: 10,

        selectedF: 0,

        Key: null,

        searchK: "",

        searchS: "",

        searchDT: "",

        columns: ['Object', 'Sender/From', 'Bodypreview', 'Date'],

        titleMail : {'Object':'subject', 'Sender/From':'sender', 'Bodypreview':'bodyPreview', 'Date':'receivedDateTime'},

        rows: {'Object':'Object', 'Sender/From':'sender', 'Bodypreview':'bodyPreview', 'Date':'receivedDateTime'}
      }
    },

    // ===================================================================================================================================
    // ===================================================================================================================================
    methods:{
      // =============================================================================================== Get mail
      getMail(){
        this.Key = null;
        const Msal = this.$store.state.MySALObj;
        this.callMsGraph(graphConfig.graphMailEndpoint, Msal.accessToken);
      },

      // =============================================================================================== Get mail for selected number of mails
      getMailSelected(){
        const Msal = this.$store.state.MySALObj;

        this.mails = []

        this.callMsGraph(graphConfig.graphMailEndpoint, Msal.accessToken);

        for (let i = 0; i < this.selected/10 - 1; i++) {
          this.callMsGraph(this.mail['@odata.nextLink'], Msal.accessToken);
        }

        console.log(this.mails)
      },

      // =============================================================================================== get the next mails
      getNextMail(){
        const Msal = this.$store.state.MySALObj;
        this.callMsGraph(this.mail['@odata.nextLink'], Msal.accessToken);
      },

      // =============================================================================================== call the API
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

      // =============================================================================================== check the JSON
      checkJSON(response){
        return response.ok ? response.json() : Promise.reject(response.json())
      },

      // =============================================================================================== update the user interface
      updateUI(response){
        //console.log(response)
        this.mail = response
        this.mails.push (this.mail)
        //console.log(this.mailLenght)
      },

      // =============================================================================================== display the mail value inside the table
      displayer(row, col){

        // Verifying for the sender
        if(col == 'Sender/From') {
          
          // if FROM is undefined
          if (this.mail?.value[row]?.from){
            return this.mail.value[row-1][ 'from' ][ 'emailAddress' ][ 'address' ]
          }

          // if SENDER is undefined
          if (this?.mail?.value[row]?.sender){
            return this.mail.value[row-1][ 'sender' ][ 'emailAddress' ][ 'address' ]
          }

          // if BOTH are undefined
          return 'Undefined sender'
        }
        
        if(!this.mail?.value[row-1]){
          return "Empty"
        }

        if(!this.mail.value[row-1]?.[ this.titleMail[col] ]){
          return "Empty value"
        }

        // Giving the value from the JSON mail in other cases
        return this.mail.value[row-1][ this.titleMail[col] ]
      },

      // =============================================================================================== deipslay the mail value inside the table for a number of mail specified (selected)
      displayerX(row, col){

        let temp = 0

        console.log("test")
        if (row >= 11){
          temp = 1
        }

        // Verifying for the sender
        if(col == 'Sender/From') {
          
          // if FROM is defined
          if (this.mails[this.index+ temp]?.value[row]?.from){
            return this.mails[this.index + temp].value[row-1][ 'from' ][ 'emailAddress' ][ 'address' ]
          }

          // if SENDER is defined
          if (this?.mails[this.index+ temp]?.value[row]?.sender){
            return this.mails[this.index+ temp].value[row-1][ 'sender' ][ 'emailAddress' ][ 'address' ]
          }

          // if BOTH are undefined
          return 'Undefined sender'
        }
        
        if(!this.mails[this.index+ temp]?.value[row-1]){
          return "Empty"
        }

        if(!this.mails[this.index+ temp].value[row-1]?.[ this.titleMail[col] ]){
          return "Empty value"
        }

        // Giving the value from the JSON mail in other cases
        return this.mails[this.index+ temp].value[row-1][ this.titleMail[col] ]
      },

      // =============================================================================================== Launch the reasearch on the mail table
      researchMail(){
        if(this.searchK != "" && this.searchDT != ""){
          this.filteredmail = this.filteredKeyAndDate();
          this.Key = 1;
        }
        if(this.searchK != ""){
          this.filteredmail = this.filteredKeyword();
          this.Key = 1;
        }
        if(this.searchS != ""){
          this.filteredmail = this.filteredSender();
          this.Key = 1;
        }
        if(this.searchDT != ""){
          this.filteredmail = this.filteredDate();
          this.Key = 1;
        }
        this.selectedF = Object.keys(this.filteredmail).length
      },

      // =============================================================================================== Keyword
      filteredKeyword() {
        return this.mail.value.filter(value => {
          if(value.subject!=null){
            const Object = value.subject.toString().toLowerCase();
            const Bodypreview = value.bodyPreview.toLowerCase();
            const searchTerm = this.searchK.toLowerCase();

            return Object.includes(searchTerm) ||
              Bodypreview.includes(searchTerm);
          }
          return "";
        });
      },

      // =============================================================================================== Sender
      filteredSender() {
        return this.mail.value.filter(value => {
          if(value.subject!=null){
            const Sender = value.sender.toString().toLowerCase();
            const searchTerm = this.searchS.toLowerCase();

            return Sender.includes(searchTerm);
          }
          return "";
        });
      },

      // =============================================================================================== Date
      filteredDate() {
        return this.mail.value.filter(value => {
          if(value.subject!=null){
            const Date = value.receivedDateTime.toString().toLowerCase();
            const searchTerm = this.searchDT.toLowerCase();

            return Date.includes(searchTerm);
          }
          return "";
        });
      },

      // =============================================================================================== Keyword and Date
      filteredKeyAndDate() {
        return this.mail.value.filter(value => {
          if(value.subject!=null){
            const Object = value.subject.toString().toLowerCase();
            const Bodypreview = value.bodyPreview.toLowerCase();
            const Date = value.receivedDateTime.toString().toLowerCase();
            const searchTermK = this.searchK.toLowerCase();
            const searchTermD = this.searchDT.toLowerCase();


            return Object.includes(searchTermK) ||
              Bodypreview.includes(searchTermK) ||
              Date.includes(searchTermD);
          }
          return "";
        });
      },

      // =============================================================================================== display the mail value inside the table
      displayerF(row, col){

        // Verifying for the sender
        if(col == 'Sender/From') {
        
        // if FROM is undefined
        if (this.filteredmail[row]?.from){
          return this.filteredmail[row-1][ 'from' ][ 'emailAddress' ][ 'address' ]
        }

        // if SENDER is undefined
        if (this?.filteredmail[row]?.sender){
          return this.filteredmail.value[row-1][ 'sender' ][ 'emailAddress' ][ 'address' ]
        }

        // if BOTH are undefined
        return 'Undefined sender'
      }

      if(!this?.filteredmail[row-1]){
        return "Empty"
      }

      if(!this?.filteredmail[row-1]?.[ this.titleMail[col] ]){
        return "Empty value"
      }

      // Giving the value from the JSON mail in other cases
      return this.filteredmail[row-1][ this.titleMail[col] ]
    },

  },
    // ===============================================================================================================================
    // ===============================================================================================================================
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.load{
    min-width: 150px;
    min-height: 40px;
}

.Centered{
  text-align: center;
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

.input{
  min-width: 50px;
  min-height: 10px;
  font: 14px/1 sans-serif;
  text-align: center;
}

.reload{
    min-width: 100px;
    min-height: 40px;
}

.research{
    min-width: 100px;
    min-height: 40px;
}

.nbMailDisplayInput{
  width: 40px;
  min-height: 8px;
  color: white;
  background-color: #42b983;
}

.Next{
  text-align: center;
}
</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->