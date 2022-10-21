
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    <button class="button" id="baseButton"
        :style="{ 'background-color': color }">
        <slot/>
    </button>
</template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
export default {
  name: 'BaseButton',
  
  props:{
    color: {
        type: String,
        default: 'primary'
    } 
  }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>
.button {
    color: white;
    background-color: #42b983;
    border-radius: 5px;
    outline: none;
    border: none;
    margin: 2px;
    height: 30px;
}
.button:hover {
  background-color: #237e55;
}
.button:disabled{
  background-color: #8fbaa7;
  cursor: not-allowed;
}
</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->