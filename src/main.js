import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-light-indigo/theme.css' // theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import ToggleButton from 'primevue/togglebutton'

const app = createApp(App).use(store).use(router)

app.use(PrimeVue)
app.use(ToastService)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast', Toast)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('ToggleButton', ToggleButton)
app.mount('#app')
