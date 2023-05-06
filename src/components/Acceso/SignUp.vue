<script setup>
import { ref } from 'vue';

const usuario = ref('');
</script>
<template>
  <div class="card flex align-items-center justify-content-center">
    <div class="carta" style="width: 35rem">
      <div class="header">
        <img src="../../assets/img/3.-logoPCBOULDERS.png" alt="" />
      </div>
      <div class="content">

    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1 padding">
            <span class="p-inputgroup-addon">
                <i class="pi pi-user"></i>
            </span>
            <InputText placeholder="Nombre completo" />
        </div>

    </div>

    <div class="card flex flex-column md:flex-row gap-3">
        <div class="p-inputgroup flex-1 padding">
            <span class="p-inputgroup-addon">
                <i class="pi pi-check"></i>
            </span>
            <InputText placeholder="Documento de identidad" />
        </div>

    </div>




<div class=" flex-wrap gap-3 padding">
    <div class="flex align-items-center">
        <RadioButton v-model="usuario" inputId="usuario1" name="Experto" value="Experto" />
        <label for="usuario1" class="ml-2">Experto</label>
    </div>
    <div class="flex align-items-center">
        <RadioButton v-model="usuario" inputId="usuario2" name="Inexperto" value="Inexperto" />
        <label for="usuario2" class="ml-2">Inexperto</label>
    </div>
   
</div>

    


        <div class="card p-fluid padding">
          <Chips v-model="email" type="email" placeholder="Correo electrónico" />
        </div>
        <div class="card p-fluid padding" >
          <Password v-model="contraseña" toggleMask placeholder="contraseña" :feedback="false" />
        </div>

        <div class="mx-auto mt-4 padding centrar">
            
          <Button @click="onSubmit" label="Continuar"></Button>
        </div>

        <RouterLink to="/sign-in">
          <a>¿Ya tienes cuenta? Inicia sesión</a>
        </RouterLink>






      </div>

      <div></div>
    </div>
  </div>
</template>
