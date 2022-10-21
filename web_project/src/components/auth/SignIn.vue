<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Buttons">
        
        <div v-if=" this.$store.state.userName=='Nobody is logged at the moment'">
            
            <SignInButton></SignInButton>

        </div>

        <div v-else>

            <SignOutButton></SignOutButton>

        </div>

    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import SignInButton from '../button/SignInButton.vue';
import SignOutButton from '../button/SignOutButton.vue';

export default {
    name: 'HomeContent',
    
    components:{
    SignInButton,
    SignOutButton
},

    props: {
        color: {
            type: String,
            default: 'primary'
        }
    },
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.Body{
  background-color: #8cd2b8;
  height: auto;
  color: white;
  font: bold 40px/1 sans-serif;
  padding: 8px;
  text-align: left;
  margin-bottom: 5px;
}

</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->