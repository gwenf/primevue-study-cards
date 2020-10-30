import { createApp } from 'vue'

import Menubar from 'primevue/menubar'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Steps from 'primevue/steps'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './sass/index.scss'

const app = createApp(App)
app.use(store)
app.use(router)

app.component('Dialog', Dialog)
app.component('Menubar', Menubar)
app.component('Card', Card)
app.component('Button', Button)
app.component('Steps', Steps)

app.mount('#app')
