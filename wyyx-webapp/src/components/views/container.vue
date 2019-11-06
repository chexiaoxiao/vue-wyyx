<template>
    <div class="banner">
        <div><a href="#"><img src="../../assets/img/banner1.png" alt=""><p>新品首发</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner2.png" alt=""><p>居家生活</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner3.png" alt=""><p>服饰鞋包</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner4.png" alt=""><p>美食酒水</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner5.png" alt=""><p>个护清洁</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner6.png" alt=""><p>母婴亲子</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner7.png" alt=""><p>运动旅行</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner8.png" alt=""><p>数码家电</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner9.png" alt=""><p>全球特色</p></a></div>
        <div><a href="#"><img src="../../assets/img/banner10.gif" alt=""><p>好货抄底</p></a></div>
    </div>
</template>

<script>
    export default {
        name: "container"
    }
</script>

<style scoped>
.banner{
    width:90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.12rem;
}
    .banner>div{
        margin-top: 0.1rem;
        width:18%;
        text-align: center;
    }
.banner>div img{
    margin-bottom: 0.1rem;
    width:100%;
}
</style>