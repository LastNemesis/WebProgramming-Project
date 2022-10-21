
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Template -->
<template>

    <!-- :disabled="isPending" -->
    <BaseButton 

        class="signInB"

        @click.stop.prevent="getUser">

        <div v-if="this.userName==='Nobody is logged at the moment'">
            Sign in with microsoft
        </div>

        <div v-else>
            Logged as {{this.userName}}
        </div>
    </BaseButton>

</template>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Script -->
<script>
import BaseButton from './BaseButton'
import {signInAndGetUser} from '../../lib/microsoftLogIn.js'

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
        sendingName(user){

            this.$emit("userName", this.userName);

            this.$store.commit('increment', this.userName);

            this.$store.commit('changeMySALObj', user);
        },
    
        getUser(){
            const promise = new Promise( function(resolve) { resolve( signInAndGetUser() ) } );
            promise
            .then(user=>{
                //console.log(user["1"])
                this.userName = user.account.name;
                this.sendingName(user);
                })
            .catch(error=>
                console.log("Something went wrong: ", error
                ))
        }
    }
}
</script>

<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = Style -->
<style scoped>

.signInB{
    min-width: 150px;
    min-height: 40px;
}


</style>
<!-- = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = End -->