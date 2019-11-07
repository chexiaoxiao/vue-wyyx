<template>
    <div>
        <scan-header></scan-header>
        <swiper-list></swiper-list>
        <my-img :data="data.myImgData.myImgData1"></my-img>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData1"></my-banner>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData2"></my-banner>
        <xian-tiao></xian-tiao>
        <my-img :data="data.myImgData.myImgData2"></my-img>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData3"></my-banner>
    </div>
</template>

<script>
    import scanHeader from "./views/scan/scanHeader";
    import myBanner from "./views/scan/myBanner";
    import myImg from "./views/scan/myImg";
    import xianTiao from "./views/scan/xianTiao";
    import swiperList from "./views/scan/swiperList";
    import api from "../api/api";

    export default {
        name: "scan",
        components: {
            scanHeader,
            myBanner,
            myImg,
            xianTiao,
            swiperList
        },
        methods:{
            async _initScanData(){
                let data = await api.getScanData()
                this.data=data
            }
        },
        beforeMount() {
            this._initScanData()
        },
        data(){
            return {
                data:[]
            }
        }
        // data() {
        //     return {
        //         bannerData: {
        //             bannerData1: {
        //                 title: "双11、黑五有哪些不能错过的好东西？一定要看的购物及必买清单",
        //                 imgUrl: "../img/good.jpg",
        //                 bannerSpan: "42.38k人看过"
        //             },
        //             bannerData2: {
        //                 title: "百款重磅新品来袭！现在付定金，更有超值折扣！",
        //                 imgUrl: "../img/swiper6.jpg",
        //                 bannerSpan: "20w人看过"
        //             },
        //             bannerData3: {
        //                 title: "6大严选新态度，6个重启生活的新选择！",
        //                 imgUrl: "../img/5af9e2.jpg",
        //                 bannerSpan: "81.9k人看过"
        //             }
        //         },
        //         myImgData: {
        //             myImgData1: {
        //                 imgUrl: "../img/3e6407.jpg"
        //             },
        //             myImgData2: {
        //                 imgUrl: "../img/3bcfe.jpg"
        //             }
        //         }
        //     }
        // }
    }
</script>

<style scoped>

</style>