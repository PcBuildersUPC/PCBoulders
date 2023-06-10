<template>
  <lineaHorizontal />
  <div class="pantComple">
    <div class="layout">
      <div class="sidebar">
        <toolBarComponent />
      </div>

      <div class="content">
        <div class="seccion-procesadores">
          <h2 class="subtitulo-procesadores">Acerca de procesadores</h2>
          <div class="procesadores-contenido">
            <div class="procesadores-imagen">
              <img
                src="https://thumbs.dreamstime.com/b/joven-feliz-trabajando-en-una-laptop-sentada-terraza-de-la-cafetería-e-informal-mujer-posando-mirando-cámara-frente-un-147549529.jpg"
                alt="Imagen de procesadores"
              />
            </div>
            <div class="procesadores-texto">
              ¿Quieres descubrir todo sobre los procesadores? Sus núcleos, su
              velocidad de reloj, su forma de operar, entre otros. Dale click a
              este video y te sumergeremos entre las principales características
              de los procesadores.
            </div>
          </div>
          <div class="procesadores-separador"></div>
          <h2 class="subtitulo-procesadores">Acerca de procesadores</h2>

          <div class="procesadores-pie">
            <div class="procesadores-contenido">
              <div class="procesadores-imagen">
                <img
                  src="https://thumbs.dreamstime.com/b/lápiz-y-papel-entrada-en-el-bloc-de-notas-icono-la-lección-hoja-blanco-ilustración-caricatura-plana-escritura-papelería-205915327.jpg"
                  alt="Imagen de componentes de computadora"
                />
              </div>
              <div class="procesadores-texto">
                En este artículo se explica los principales componentes de una
                computadora para su funcionamiento principal. Además, se detalla
                las mejores opciones actuales del mercado para cada
                correspondiente ámbito de interés.
              </div>
            </div>
          </div>
        </div>

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import toolBarComponent from "./tool-bar.component.vue";


export default {
  name: "cuadroComponent",
  components: {
    toolBarComponent,
  
  },
};
</script>

<style scoped>
.pantComple {

  width: 100vw;
  background-color: #f2efe7;
}
.layout {
  display: flex;
}

.sidebar {
  
  background-color: #f0f0f0;
  padding: 10px;
}

.content {
  flex: 1;
width: 2rem;


}

/* Resto de los estilos para los otros elementos */
</style>
