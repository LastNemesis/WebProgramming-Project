// Importing our components
import HomeContent from '../components/pages/HomeContent.vue'
import ConversationPage from '../pages/ConversationPage.vue'
import ConversationContent from '../pages/ConversationContent.vue'

// Importing the methods from the VueRouter package
import {createRouter, createWebHistory} from 'vue-router';

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
        next('/');
    }
}

// Defining some routes
const routes = 
[
  { 
    path: '/', 
    component: HomeContent, 
    alias: '/Home'
  },

  { 
    path: '/Emails/:id', 
    component: ConversationPage,  
    beforeEnter : guardMyroute,
    children: [
      {
        path: '',
        component: ConversationContent,
      }
    ]
  }
]

// Creating the router instance
const router = createRouter({
    // Providing history
    history: createWebHistory(),
    routes, 
  })



// Exporting the router
export default router;