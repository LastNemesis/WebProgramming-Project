<template>
  <div>
    <ComponentsLayout/>
  </div>
</template>

<script>
import ComponentsLayout from './components/ComponentsLayout.vue';

export default {
  name: 'App',
  
  components: {
    ComponentsLayout
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
