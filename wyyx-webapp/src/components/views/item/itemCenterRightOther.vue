<template>
    <div class="right-other">
        <img :src="data.bannerUrl" />
        <other :otherdates="data.otherDates" class="otherdates"></other>
    </div>
</template>

<script>
    import other from "./other";
    export default {
        name: "itemCenterRightOther",
        components:{
            other
        },
        props:["data"]
        // data() {
        //     return {
        //         "otherDates":[
        //             {
        //                 "title":"秋冬好物",
        //                 "dates": [
        //                     {
        //                         name: "居家生活新品",
        //                         url: './img/itembanner4-2.png'
        //                     },
        //                     {
        //                         name: "服饰鞋包新品",
        //                         url: "./img/itembanner4-3.png"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "title":"床上用品",
        //                 "dates": [
        //                     {
        //                         name: "居家生活新品",
        //                         url: './img/itembanner4-2.png'
        //                     },
        //                     {
        //                         name: "服饰鞋包新品",
        //                         url: "./img/itembanner4-3.png"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "title":"家具饰品",
        //                 "dates": [
        //                     {
        //                         name: "居家生活新品",
        //                         url: './img/itembanner4-2.png'
        //                     },
        //                     {
        //                         name: "服饰鞋包新品",
        //                         url: "./img/itembanner4-3.png"
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
    }
</script>

<style scoped>
    .right-other {
        width: 65%;
        margin: 0 auto;
    }

    .right-other img {
        width: 100%;
    }
    .otherdates{
        margin: 0.1rem auto;
    }
</style>