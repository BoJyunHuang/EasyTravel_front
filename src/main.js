<<<<<<< HEAD
import './assets/main.scss'

=======
>>>>>>> 2769d8dd10b02ab558f277c150e4dc7d0afe48c3
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.scss'
import "bootstrap"
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
