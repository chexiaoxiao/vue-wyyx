<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(data,u) in textList" :key="u" :class="index===u?'red':'normal'" @click="changText(u)">{{data}}</div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper';

    export default {
        name: 'mySwiper',
        data(){
            return {
                textList:
                    [
                "推荐","认识严选","好物大赏","选购指南","特色系列","晒单","回购榜"
                ],
                index:0
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                slidesPerView: 4.3,
                spaceBetween:2
            })
        },
        methods:{
            changText(u){
                this.index=u;
            }
        }
    }
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        /*margin: 0.1rem auto;*/
        padding:0.1rem 0;
        border-top:0.01rem solid rgb(238, 238, 238);
        border-bottom:0.01rem solid rgb(238, 238, 238);
    }
    .swiper-slide{
        text-align: center;
    }
    .red{
        color:#d81e06;
        /*border-bottom: 0.02rem solid #d81e06;*/
        font-weight: bold;
    }
</style>