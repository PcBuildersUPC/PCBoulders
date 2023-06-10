<script setup>


</script >

<template>
  <div class="pant">
    <div class="top-bar">
      <div class="left">
        <i class="pi pi-user icon"></i>
      </div>
      <h1 class="title">Bienvenido</h1>
      <img class="logo right" src="../../assets/img/3.-logoPCBOULDERS.png" alt="Right Image" />
    </div>

    <div class="card-container">
      <div class="card">
        <h2 class="card-title">Procesadores: Funcionamiento y principales componentes</h2>
        <div class="card-content">
          <video class="card-video" controls>
   
            <source src="https://www.youtube.com/embed/0zkX6nlpiSk" type="video/mp4" />
          </video>
        </div>
      </div>

      <div class="card">
        <h2 class="card-title">Descripción</h2>
        <div class="card-content">
          <p class="card-description">
        ¿Queires descrubir todo sobre los procesadores?. Sus núcleos, su velicidad de reloj, su forma de operar, entre otros. Dale click a este video y te sumergeremos entre las principales características de los procesadores 
        <br>
        <br>

        Duración: 35 min 
        <br>
        <br>
        Autor: Mónica Villegas
        
          </p>
        </div>
      </div>
    </div>

 <div class="card">
        <Card>
            <template #title> Otros videos que le podrian gustar</template>
            <template #content>
               
            </template>
        </Card>
    </div>
    
  </div>


  


</template>

<script>
export default {
  name: "informacion",
  
};

</script>

<style>


.pant{
   width:90vw;
   height: 100vw;
  background-color: #f2efe7;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #f0f0f0;
  padding: 0 16%;
}

.logo {
  height: 40px;
}




.title {
  font-size: 18px;
  font-weight: bold;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #f0f0f0;
  padding: 0 16px;
}

.left {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 24px;
  margin-right: 8px;
}

.right {
  margin-left: 16px;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.card-container {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}

.card {
  width: calc(50% - 12px);
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-video {
  width: 100%;
}

.card-description {
  margin-top: 8px;
  line-height: 1.5;
}

</style>