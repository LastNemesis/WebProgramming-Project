<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Header">

      Mail Reader - Microsoft Authentification Project

      <SignIn class="right"></SignIn>
      
      <div class="Logged_In" v-if=" this.$store.state.userName!='Nobody is logged at the moment'"> 
        Account that is currently logged in: {{this.$store.state.userName}}
      </div>
      
      <div class="Navigation"> 
        
      </div>

    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import SignIn from '../auth/SignIn.vue';

export default {
    name: 'HomeHeader',
    
    components:{
      SignIn
    }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.Header{
  background-color: #30b484;
  height: auto;
  color: white;
  font: bold 40px/1 sans-serif;
  padding: 8px;
  text-align: left;
  margin-bottom: 5px;
  overflow: hidden;
  clear: both;
}

.Navigation
{
  color: white;
  font: bold 20px/1 sans-serif;
}


.Logged_In{
  color: white;
  font: bold 20px/1 sans-serif;
  text-decoration: none;
}

.right{
  float: right;
}
</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->