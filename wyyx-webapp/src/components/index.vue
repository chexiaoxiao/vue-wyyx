<template>
    <div>
        <v-header></v-header>
        <headerList></headerList>
        <swiper></swiper>

        <div class="server">
            <div><img src="../assets/img/1.png" alt=""><span>网易自营品牌</span></div>
            <div><img src="../assets/img/2.png" alt=""><span>30天无忧退货</span></div>
            <div><img src="../assets/img/3.png" alt=""><span>48小时快速退款</span></div>
        </div>
        <container></container>
        <div class="center-banner">
            <a href="#"><img src="../assets/img/banner.png" alt=""></a>
        </div>

        <div class="pink">
         <div class="pink-top"><a href="#"><img src="../assets/img/9be7a.png" alt=""></a></div>
            <div class="pink-center">
                <img src="../assets/img/111.png" alt="">
                <img src="../assets/img/222.png" alt="">
            </div>
            <div class="pink-bottom"><a href="#"><img src="../assets/img/9cc22.png" alt=""></a></div>
        </div>
            <div class="bottom"><img src="../assets/img/14599bb.gif" alt=""></div>

    </div>

</template>

<script>
    import vHeader from "./views/header"
    import headerList from "./views/headerList"
    import swiper from "./views/swiper";
    import container from "./views/container";

    export default {
        name: "index",
        components: {
            vHeader,
            headerList,
            swiper,
            container
        }

    }
</script>

<style scoped>
    .server img{
        display: inline-block;
        width:0.22rem;
        position: absolute;
        top:0.05rem;
    }
 .server{
     padding-top: 0.05rem;
     width:90%;
     display: flex;
     justify-content: space-around;
     margin: 0 auto;
     position: relative;
 }
    .server span{
        padding-left:0.23rem;
        display: inline-block;
        width:0.9rem;
        font-size: 0.12rem;
    }
    .center-banner{
        margin: 0 auto;
        margin-top: 0.1rem;
        width:100%;
    }
    .center-banner img{
        width:100%;
    }
    .pink{
        width:100%;
        background-color: rgb(254,144,143);
    }
    .pink>div{
        width:90%;
        margin:0 auto;
    }
    .pink-top img,.pink-bottom img{
        width:100%;
    }
    .pink-center{
        display: flex;
        justify-content: space-between;
    }
    .pink-center img{
        border-radius: 0.1rem;
        margin: 0.05rem 0;
    }
    .bottom{
        width:100%;
        margin-bottom: 0.5rem;
    }
    .bottom img{
        width:100%;
    }

</style>