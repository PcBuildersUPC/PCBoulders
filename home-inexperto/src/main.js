import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
// App Theme
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// Add PrimeFlex
import 'primeflex/primeflex.css';
// Add Components
import Card from 'primevue/card';
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import SelectButton from "primevue/selectbutton";
import SplitButton from "primevue/splitbutton";
import Toolbar from "primevue/toolbar";
import Image from 'primevue/image';
createApp(App)
    .use(PrimeVue, { ripple: true })
    .component('Card', Card)
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-sidebar', Sidebar)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-split-button', SplitButton)
    .component('pv-image', Image)
    .mount('#app');
