<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>
    
    <BaseButton 
        :disabled="isPending"

        :color="color" 

        @click.stop.prevent="handleClick"> 
        
        <div class="text" v-if="isPending">
          You have {{this.count}} seconds to wait before clicking again.
        </div>
        
        <div class="text" v-else>
          Normal
        
        </div>
      </BaseButton>

  </template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import BaseButton from './BaseButton'

export default {
    name: 'AsyncButton',
    
    components:{
        BaseButton
    },

    props: {
        color: {
            type: String,
            default: 'primary'
        }
    },

    data () {
        return {
            isPending: false,
            count: 1
        }
    },

    methods: {
        originalOnClick() {
            const promise = new Promise((time) => {
            setTimeout(time, 2000);
            });
            return promise;
        },

        originalBisOnClick() {
            // console.log(this.count);
            this.count++;
            var promise = new Promise((time) => {
            setTimeout(time, this.count * 1000);
            });
            return promise;
        },

        handleClick () {
            this.isPending = true;
            this.originalBisOnClick().finally(() => { this.isPending = false })
        }
    
    }
}

</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>


</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->