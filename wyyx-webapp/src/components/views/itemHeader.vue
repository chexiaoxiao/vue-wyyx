<template>
    <div>
        <input type="text" placeholder="搜索商品，共24089款好物" value="">
    </div>
</template>

<script>
    export default {
        name: "itemHeader"
    }
</script>

<style scoped>
    div{
        text-align: center;
        margin: 0.1rem auto;
    }
    input{
        width:90%;
        height:0.25rem;
        background-color: rgb(238,238,238);
        border:none;
        border-radius: 0.05rem;
        outline: none;
        text-align:center;
    }

</style>