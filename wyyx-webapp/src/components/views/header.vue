<template>
    <div class="top">
        <div><a href="#">网易严选</a></div>
        <div><input type="text" placeholder="搜索商品，共24089款好物"></div>
    </div>
</template>

<script>
    export default {
        name: "vHeader"
    }
</script>

<style scoped>
.top{
    display:flex;
    width:90%;
    margin: 0 auto;
    justify-content: space-around;
}
    .top a{
        font-size: 0.2rem;
    }
    .top input{
        width:2rem;
        height:0.25rem;
        text-aline:center;
        background-color: darkgray;
        border:none;
        border-radius: 0.05rem;
        outline: none;
    }

</style>