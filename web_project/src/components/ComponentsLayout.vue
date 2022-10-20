<template>
    <div>
        
      <HomeHeader/>

      <HomeContent/>

      <HomeFooter/>

    </div>
  </template>
  
  <script>
  import HomeHeader from './pages/HomeHeader.vue';
  import HomeContent from './pages/HomeContent.vue';
  import HomeFooter from './pages/HomeFooter.vue';
  
  export default {
    name: 'ComponentsLayout',
    
    components: {
        HomeHeader,
        HomeContent,
        HomeFooter
  }
  }
  </script>
  
  <style>
 
  </style>
  