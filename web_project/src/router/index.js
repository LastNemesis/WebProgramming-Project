// Importing our components
import HomeContent from '../components/pages/HomeContent.vue'
import ConversationPage from '../pages/ConversationPage.vue'
import Home from '../pages/HomePage.vue'

// Importing the methods from the VueRouter package
import {createRouter, createWebHashHistory} from 'vue-router';

// Import the store value
import store from '../store.js'

// Creating the guarg function
function guardMyroute(to, from, next)
{
    var isAuthenticated= false;
    if(store.state.userName!='Nobody is logged at the moment') 
        isAuthenticated = true;
    else
        isAuthenticated= false;
    
    if(isAuthenticated) {
        // Allowed
        next(); 
    } else{
        // Not allowed
        next('/Home');
    }
}

// Defining some routes
const routes = [
    { path: '/Home', component: HomeContent},
    { 
        path: '/Conversations/:id', 
        component: ConversationPage, 
        
        beforeEnter : guardMyroute,
        children: [
            {
              path: '',
              component: Home,
            }
          ]
    }
  ]

// Creating the router instance
const router = createRouter({
    // Providing history
    history: createWebHashHistory(),
    routes, 
  })

// Exporting the router
export default router;