<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Body">

      
      
      <ReadEmail></ReadEmail>

      <router-view></router-view>

        
    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import ReadEmail from '../components/mail/ReadEmail.vue'

export default {
    name: 'ConversationPage',
    
    components:{
        ReadEmail
    }
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
.text{
  color: white;
  font: 12px/1 sans-serif;
  text-align: justify;
}

</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->