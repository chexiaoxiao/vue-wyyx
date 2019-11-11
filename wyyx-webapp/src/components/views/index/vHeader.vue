<template>
    <div class="top">
        <div><a href="#">网易严选</a></div>
        <div><input type="text" placeholder="搜索商品，共24089款好物" value="" @click="changRouter"></div>
    </div>
</template>

<script>
    export default {
        name: "vHeader",
        methods:{
            changRouter(){
                this.$router.push({path: '/main/seach'})
            }
        }
    }
</script>

<style scoped>
.top{
    display:flex;
    width:90%;
    margin: 0 auto;
    margin-top:0.15rem;
    margin-bottom: 0.15rem;
    justify-content: space-around;
}
    .top a{
        font-size: 0.2rem;
    }
    .top input{
        width:2.3rem;
        height:0.25rem;
        background-color: rgb(238,238,238);
        border:none;
        border-radius: 0.05rem;
        outline: none;
        text-align:center;
    }

</style>