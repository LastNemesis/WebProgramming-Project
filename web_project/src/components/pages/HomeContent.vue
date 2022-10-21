<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Body">
        <div class="text">
        
        </div>

        <ReadEmail></ReadEmail>
        
    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import ReadEmail from '../mail/ReadEmail.vue'

export default {
    name: 'HomeContent',
    
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