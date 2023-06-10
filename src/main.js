import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

//componenetes
import PrimeVue from "primevue/config";
// Material Design Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Card from 'primevue/card';
import Button from 'primevue/button';
import Chips from 'primevue/chips';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import FocusTrap from 'primevue/focustrap';
import ConfirmDialog from 'primevue/confirmdialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import Avatar from "primevue/avatar";
import Menubar from "primevue/menubar";



import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
 .use(PrimeVue, { ripple: true })

//componenetes
app.component('Card', Card)
app.component('Button',Button)
app.component('Chips', Chips)
app.component('Password', Password)
app.component('RadioButton', RadioButton)
app.component('InputText', InputText)
app.component('FocusTrap', FocusTrap)
app.component('ConfirmDialog', ConfirmDialog)
app.component('pv-table',DataTable)
app.component('pv-colum',Column)
app.component('pv-toolbar',Toolbar)
app.component('pv-menubar',Menubar)
app.component('pv-avatar',Avatar)



app.mount('#app')
