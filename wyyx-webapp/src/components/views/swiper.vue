<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper1.jpg" alt=""></div>-->
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper2.jpg" alt=""></div>-->
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper3.jpg" alt=""></div>-->
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper4.jpg" alt=""></div>-->
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper6.jpg" alt=""></div>-->
            <!--            <div class="swiper-slide"><img src="../../assets/img/swiper7.jpg" alt=""></div>-->
            <div class="swiper-slide" v-for="data in msg" :key="data"><img :src="data" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!--        &lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
        <!--        <div class="swiper-button-prev"></div>-->
        <!--        <div class="swiper-button-next"></div>-->

        <!--        &lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
        <!--        <div class="swiper-scrollbar"></div>-->
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: 'swiper',
        data() {
            return {
                msg: ["./img/swiper1.jpg", "./img/swiper2.jpg", "./img/swiper3.jpg", "./img/swiper4.jpg", "./img/swiper6.jpg","./img/swiper7.jpg", "./img/swiper8.jpg"]
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        margin: 0.05rem auto;
    }

    .swiper-container img {
        width: 100%;
    }

    :root {
        --swiper-theme-color: red;
    }
</style>