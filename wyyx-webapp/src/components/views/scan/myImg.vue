<template>
    <div>
        <img :src="data.imgUrl" alt="">
    </div>
</template>

<script>
    export default {
        name: "myImg",
        props:["data"]
    }
</script>

<style scoped>
    div{
        width:100%;
        padding: 0.15rem 0;
        background: #fff;
    }
    img{
        width:90%;
        margin: 0 auto;
    }

</style>