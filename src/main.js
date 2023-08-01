import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// const { createVuetify } = vuetify
// const vuetify = createVuetify()

// Vuetify
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'

const vuetify = createVuetify({
  components,
  directives,
  labsComponents
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')
