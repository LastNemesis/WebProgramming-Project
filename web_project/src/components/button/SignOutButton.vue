<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>

    <!-- :disabled="!isPending" -->
    <BaseButton 

        class="signOutB"

        @click.stop.prevent="getUser">

        <div v-if="this.userName===''">
            Already logged out
        </div>

        <div v-else>
            Sign out of microsoft
        </div>
    </BaseButton>

</template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import BaseButton from './BaseButton'
import {signOut} from '../../lib/microsoftLogOut.js'

export default {

    name: 'SignInButton',

    components:{
        BaseButton
    },

    data () {
        return {
            userName: this.$store.state.userName
            }
        },

    methods: {
        sendingName(){
            this.$emit("userName", this.userName);
            this.$store.commit('increment', this.userName);
        },
    
        getUser(){
            const promise = new Promise( function(resolve) { resolve( signOut() ) } );
            promise
            .then(user=>{
                console.log(user);
                this.userName = "Nobody is logged at the moment";
                this.sendingName();})
            .catch(error=>
                console.log("Something went wrong: ", error))
        }
    }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>

.signOutB{
    min-width: 150px;
    min-height: 40px;
}

</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->