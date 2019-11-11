<template>
    <div class="right">
        <img :src="data.bannerUrl" />
        <div class="right-banner">
            <div v-for="(data,u) in data.dates" :key="u">
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
        margin: 0 auto;
    }

    .right img {
        width: 100%;
    }
    .right-banner{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.1rem;
    }
    .right-banner>div{
        width:30%;
        text-align: center;
        font-size: 0.12rem;
        margin-top: 0.1rem;
        margin-left: 0.08rem;
    }
    .right-banner>div img{
        width:100%;
    }
</style>