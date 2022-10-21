<template>
    <div>
        
    <HomeHeader/>

    <router-view></router-view>

    <HomeFooter/>

    </div>
</template>
  
<script>
import HomeHeader from './pages/HomeHeader.vue';
//import HomeContent from './pages/HomeContent.vue';
import HomeFooter from './pages/HomeFooter.vue';
  
export default {
  name: 'ComponentsLayout',
    
  components: {
    HomeHeader,
    HomeFooter
  },

  data () {
    return {
      userName: null
      }
    },


}
</script>
  

<style>
 
</style>
  