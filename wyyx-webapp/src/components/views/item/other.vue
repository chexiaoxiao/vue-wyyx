<template>
    <div class="others">
        <div v-for="data in otherdates" :key="data" class="otherdates">
            <h1>{{data.title}}</h1>
            <div class="other-banner">
                <div v-for="(item,i) in data.dates" :key="i">
                    <a href="#"><img :src="item.url">
                        <p>{{item.name}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "other",
        props: ["otherdates"]
    }
</script>

<style scoped>
    .others h1{
        font-size: 0.16rem;
        max-width: 3.54rem;
        padding-bottom: .05rem;
        margin-bottom: .16rem;
        text-align: left;
        font-weight: 700;
        color: #333;
        border-bottom: 0.01rem solid #d9d9d9;
    }
    .other-banner{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.1rem;
    }
    .other-banner>div{
        width:30%;
        text-align: center;
        font-size: 0.12rem;
        margin-top: 0.1rem;
        margin-left: 0.08rem;
    }
    .other-banner>div img{
        width:100%;
    }
    .otherdates{
        margin-bottom: 0.15rem;
    }
</style>