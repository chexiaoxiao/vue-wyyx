<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,u) in data" :key="u"><img :src="data.p" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: 'mySwiper',
        props:["data"],
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