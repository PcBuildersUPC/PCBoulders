<script setup>
import { ref } from "vue";

const usuario = ref("");
</script>
<template>
  <div class="card flex align-items-center justify-content-center">
    <div class="carta" style="width: 35rem">
      <div class="header">
        <img src="../../assets/img/3.-logoPCBOULDERS.png" alt="" />
      </div>
      <div class="content">
        <form action="" class="form">
            
          



          <div class="card p-fluid padding">
            <Chips v-model="value" placeholder="usuario" />
          </div>
          <div class="card p-fluid padding">
            <Password v-model="value" toggleMask placeholder="contraseña" :feedback="false" />
          </div>
        </form>
      </div>

       <div class="mx-auto mt-4 padding centrar">
        <Button @click="onSubmit" label="Continuar"></Button>
      </div>

       <div>
        <RouterLink to="/sign-up">
          <a>No tienes cuenta ? registrate haciendo click aqui !</a>
        </RouterLink>
      </div>

    </div>
  </div>


  
</template>

<style setup>
.carta {
  padding: 2rem;
  background-color: #fff;
  border-radius: 1.5em;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.header img {
  width: 20rem;
}
.form {
  display: flex;
  flex-direction: column;
}
.padding {
  padding-bottom: 2rem;
}

.centrar {
justify-content: center;
align-items: center;
}
</style>
