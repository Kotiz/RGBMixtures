import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.min.css'
import 'v-animate-css'

import router from './router'

const app = createApp(App)
app.use(PrimeVue)

app.component('But-ton', Button)
app.component('Input-text', InputText)

createApp(App).use(router).mount('#app')
