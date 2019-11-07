<template>
    <div class="right">
        <img src="../../../assets/img/itemtop.png" alt="">
        <div class="right-banner">
            <div v-for="data in data.nav.dates" :key="data">
                <a href="#"><img :src="data.url" alt="">
                    <p>{{data.name}}</p></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "itemCenterRight",
        props:["data"]
    }
</script>

<style scoped>
    .right {
        width: 65%;
        margin-left: 0.15rem;
    }

    .right img {
        width: 100%;
    }
    .right-banner{
        width:100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 0.15rem;
    }
    .right-banner>div{
        width:30%;
        text-align: center;
        font-size: 0.12rem;
    }
    .right-banner>div img{
        width:100%;
    }
</style>