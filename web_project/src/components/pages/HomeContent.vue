<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Body">
        This is the Home Page ! 
        Please log in for more content !
    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>

export default {
    name: 'HomeContent',
    
    components:{
    }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.Body{
  background-color: #8cd2b8;
  height: auto;
  color: white;
  font:  20px/1 sans-serif;
  padding: 8px;
  text-align: left;
  margin-bottom: 5px;
  min-height: 100px;
}
.text{
  color: white;
  font: 12px/1 sans-serif;
  text-align: justify;
}

</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->