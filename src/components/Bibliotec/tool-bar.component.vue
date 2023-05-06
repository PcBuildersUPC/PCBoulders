<template>
<div>

    <pv-menubar class="sticky bg-primary">
        <template #start>
            <pv-avatar label="P" class="mr-2" size="xlarge" />
            <p>Bienvenido, Fabrizio Cuellar</p>
            <h1 class="biblioteca-titulo">Biblioteca</h1>

            <div class="biblioteca">
                <div class="biblioteca-filtros">
                    <h2 class="biblioteca-titulo-filtros">Filtros</h2>
                    <div class="biblioteca-filtros-subtitulo">
                        <h3>Información Escrita</h3>
                        <ul>
                            <li>
                                <input type="checkbox" id="articulos-web">
                                <label for="articulos-web">Artículos Web</label>
                            </li>
                            <li>
                                <input type="checkbox" id="articulos-periodisticos">
                                <label for="articulos-periodisticos">Artículos Periodísticos</label>
                            </li>
                            <li>
                                <input type="checkbox" id="noticias-recientes">
                                <label for="noticias-recientes">Noticias Recientes</label>
                            </li>
                            <li>
                                <input type="checkbox" id="tesis-academicas">
                                <label for="tesis-academicas">Tesis Académicas</label>
                            </li>
                            <li>
                                <input type="checkbox" id="discos-duros">
                                <label for="discos-duros">Discos Duros</label>
                            </li>
                            <li>
                                <input type="checkbox" id="otros">
                                <label for="otros">Otros</label>
                            </li>

                        </ul>
                    </div>
                    <div class="biblioteca-filtros-subtitulo">
                        <h3>Videos</h3>
                        <div class="biblioteca-filtros-subtitulo-duracion">
                            <h4>Duración:</h4>
                            <ul>
                                <li>
                                    <input type="checkbox" id="menos de 5 minutos">
                                    <label for="menos de 5 minutos">Menos de 5 minutos</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="de 5 a 25 minutos">
                                    <label for="de 5 a 25 minutos">De 5 a 25 minutos</label>
                                </li>
                                <li>
                                    <input type="checkbox" id="más de 25 minutos">
                                    <label for="más de 25 minutos">Más de 25 minutos</label>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="biblioteca-filtros-subtitulo">
                        <h3>Temas</h3>
                        <ul>
                            <li>
                                <input type="checkbox" id="procesadores">
                                <label for="procesadores">Procesadores</label>
                            </li>
                            <li>
                                <input type="checkbox" id="tarjeta de video">
                                <label for="tarjeta de video">Tarjeta de video</label>
                            </li>
                            <li>
                                <input type="checkbox" id="tarjeta de video">
                                <label for="tarjeta de video">Tarjeta de video</label>
                            </li>
                            <li>
                                <input type="checkbox" id="discos Duros/Sólidos">
                                <label for="discos Duros/Sólidos">Discos Duros/Sólidos</label>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </template>

        <template #end>

        </template>
    </pv-menubar>

</div>

</template>

<script >

export default {
    name: "toolbarContent"
}

</script>

