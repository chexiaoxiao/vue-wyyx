<template>
    <div>
        <scan-header></scan-header>
        <swiper-list></swiper-list>
        <my-img :data="data.myImgData.myImgData1" v-if="data.myImgData"></my-img>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData1" v-if="data.bannerData"></my-banner>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData2" v-if="data.bannerData"></my-banner>
        <xian-tiao></xian-tiao>
        <my-img :data="data.myImgData.myImgData2" v-if="data.myImgData"></my-img>
        <xian-tiao></xian-tiao>
        <my-banner :data="data.bannerData.bannerData3" v-if="data.myImgData"></my-banner>
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
    }
</script>

<style scoped>

</style>