<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <div class="Header">
      Mail Reader - Mircrosoft Authentification Project

      <div class="Navigation"> 
        
      </div>
    </div>
  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>


export default {
    name: 'HomeHeader',
    components:{

    },

    data () {
        return {
            name: ''
        }
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
}

.Navigation
{
  color: white;
  font: bold 20px/1 sans-serif;
}


.navText{
  color: white;
  font: bold 20px/1 sans-serif;
  text-decoration: none;
}
</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->