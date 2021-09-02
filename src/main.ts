import { createApp } from 'vue'
import App from './App.vue'
import moment from 'moment';
import {router} from '@/router'

const app = createApp(App);

app.config.globalProperties.$moment = moment

app.use(router)
app.mount('#app')
