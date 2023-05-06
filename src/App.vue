<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

 <toolbar-content>

 </toolbar-content>
 <cuadro-component>

 </cuadro-component>

 <RouterLink to="/sign-in" ></RouterLink>
  <RouterView />
</template>


<script>

import ToolbarContent from "@/components/toolbar/tool-bar.component.vue";
import CuadroComponent from "@/components/toolbar/cuadro-component.vue";

export default {
 name: "App",
 components: {
  CuadroComponent,
  ToolbarContent,


 },
};
</script>

<style scoped>

</style>
