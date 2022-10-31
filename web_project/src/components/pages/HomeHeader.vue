<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Header">

      <router-link to="/" class="navText"> 
        <img v-bind:src="require('../../assets/Logo.png')" class ="img"/> 
      </router-link>
      
      Mail Reader - Microsoft Authentification Project

      <SignIn class="right"></SignIn>
      
      <div class="Logged_In" v-if=" this.$store.state.userName!='Nobody is logged at the moment'"> 
        Account that is currently logged in: {{this.$store.state.userName}}
      </div>
      
      <div class="Navigation"> 
        Navigation :&emsp;
        
        <router-link to="/" class="navText"> 
          Home 
        </router-link>

        <div v-if="this.$store.state.userName!='Nobody is logged at the moment'">&emsp;-&emsp;</div>

        <router-link to="/Emails/:1" class="navText" v-if="this.$store.state.userName!='Nobody is logged at the moment'"> 
          Emails 
        </router-link>

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
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 5px;
  margin-top: 15px;
  color: white;
  background-color: #75d1af;
  font: bold 25px/1 sans-serif;
  text-decoration: none;
  min-width: 50%;
}

.navText{
  color: white;
  font: bold 20px/1 sans-serif;
  text-decoration: none;
}


.Logged_In{
  color: white;
  font: bold 20px/1 sans-serif;
  text-decoration: none;
}

.right{
  float: right;
}

.img{
  height: 40px;
  width: auto;
  margin-top: 10px;
}
</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->