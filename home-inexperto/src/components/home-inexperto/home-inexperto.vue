<template>
    <div>
        <pv-toolbar>
            <template #start>
                <i class="pi pi-user" style="font-size: 2.5rem; color: #FFCC33" ></i>
                <i class="pi pi-minus" style="font-size: 1.5rem; color: #FCFCFC; transform: rotate(90deg); "></i>
                <h2>Fabrizio Cuellar Villegas</h2>
            </template>
            <template #end>
                <img alt="Vue logo" class="logo" src="../../assets/logo.png" width="80" height="80" />
                <i class="pi pi-minus" style="font-size: 3.5rem; color: #FFCC33; transform: rotate(90deg); "></i>
                <h1>PC Builders</h1>
            </template>
        </pv-toolbar>
        <div class="content">
            <Card class="card-1">
                <template #title > <h2>Tiendas</h2> </template>
                <template #content>
                    <p>
                        Explora nuestras tiendas afiliadas y
                        rodéate de los mejores productos del
                        mercado. Podrás visitar todo el catálogo
                        de productos de numerosas tiendas a
                        nivel nacional e internacional. Además quédate pendiente de las promociones únicas de cada tienda.
                    </p>
                    <a>Continuar</a>
                </template>
            </Card>
            <Card class="card-2">
                <template #title > <h2>Biblioteca</h2> </template>
                <template #content>
                    <p>
                        Navega mediante numerosas fuentes de información acerca de los componentes de hardware o softaware que más te interesan. No te pierdas la información detallada en forma de guías, artículos, videos, etc.
                        ¿Qué esperas?
                    </p>
                    <a>Continuar</a>
                </template>
            </Card>
            <Card class="card-3">
                <template #title > <h2>Asesores</h2> </template>
                <template #content>
                    <p>
                        Comunícate con los mejores asesosres sobre hardware y software para guiarte en una buena compra. No solo podrás acceder a ellos mediante chat, sino también mediante llamada en tiempo real.
                    </p>
                    <a>Continuar</a>
                </template>
            </Card>

        </div>
    </div>
    <div>

    </div>
</template>

<script>
export default {
    name: 'home-inexperto',
    data() {
    },
    created() {
        console.log('created');
    },
    methods: {

    }
}

</script>
<style scoped>
.content{
    width: 1200px;
    height: 550px;
    margin-left: 140px;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.p-card{
    display: flex;
    border-radius: 10px;
    align-items: center;
    margin-left:5%;
}
.card-1{
    background-image: url("../../assets/tiendas.jpg");
    background-size:100%;
}

.card-2{
    background-image: url("../../assets/biblioteca.webp");
    background-size:cover;
}

.card-3{
    background-image: url("../../assets/asesores.jpg");
    background-size: cover;
}
.p-card h2,p{
    color:white;
}
.p-card h2{
    margin:0;
}

.p-card a{
    margin-left: 37%;
    background-color: #65420C;
    color:white;
    border-radius: 5px;
}
</style>