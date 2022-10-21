import { createApp } from 'vue'
import store from './store'
import App from './App.vue'

// Mounting our app
const app = createApp(App) //.mount('#app')

// Using our store
app.use(store)

// Using the routers
//app.use(router)

app.mount('#app')