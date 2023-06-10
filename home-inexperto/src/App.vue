<template>
    <home-inexperto></home-inexperto>
</template>

<script>
import HomeInexperto from "@/components/home-inexperto/home-inexperto.vue";
export default {
    name: 'App',
    components : {HomeInexperto},
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
    background-image: url("./assets/tiendas.jpg");
    background-size:100%;
}

.card-2{
    background-image: url("./assets/biblioteca.webp");
    background-size:cover;
}

.card-3{
    background-image: url("./assets/asesores.jpg");
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