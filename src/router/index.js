
import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/Acceso/SignUp.vue'
import SignIn from '../components/Acceso/SignIn.vue'
import cuadroComponent from "../components/Bibliotec/cuadro-component.vue";
import toolBarComponent from "../components/Bibliotec/tool-bar.component.vue";
import Toolbar from "primevue/toolbar";
import ToolBarComponent from "../components/Bibliotec/tool-bar.component.vue";

import ProductListInfo from '../components/ProductList/ProductListInfo.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/sign-in'
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    
    },
    {
      path: '/cuadro-Component',
      name: 'cuadro-Component',
      component: cuadroComponent
    },
    {
      path: '/tool-bar.Component',
      name: 'tool-bar.Component',
      component: ToolBarComponent
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn

    },
  
    {
      path: '/product-list-info',
      name: 'product-list-info',
      component: ProductListInfo
    }
  ]
});

export default router;
