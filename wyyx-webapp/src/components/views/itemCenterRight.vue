<template>
    <div class="right">
        <img src="../../assets/img/itemtop.png" alt="">
        <div class="right-banner">
            <div v-for="data in nav.dates" :key="data">
                <a href="#"><img :src="data.url" alt="">
                    <p>{{data.name}}</p></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "itemCenterRight",
        data() {
            return {
                nav: {
                    dates: [
                        {
                            name: "精选好物15元起",
                            url: "./img/itembanner1.png"
                        },
                        {
                            name: "超值好物9.9元起",
                            url: "./img/itembanner2.png"
                        },
                        {
                            name: "999+好评",
                            url: "./img/itembanner3.png"
                        },
                        {
                            name: "囤货必备5折起",
                            url: "./img/itembanner4.png"
                        },
                        {
                            name: "11.11特惠3折起",
                            url: "./img/itembanner5.png"
                        },
                        {
                            name: "每日限时冰点价",
                            url: "./img/itembanner6.png"
                        },
                        {
                            name: "11.11预售倒计时",
                            url: "./img/itembanner7.png"
                        },
                        {
                            name: "美食特惠6折起",
                            url: "./img/itembanner8.png"
                        },
                        {
                            name: "冬季穿搭59元起",
                            url: "./img/itembanner9.png"
                        },
                        {
                            name: "11.11新品发布",
                            url: "./img/itembanner10.png"
                        },
                        {
                            name: "明星商品低至69元",
                            url: "./img/itembanner11.png"
                        },
                        {
                            name: "断货补单王39元起",
                            url: "./img/itembanner12.png"
                        },
                        {
                            name: "过冬床品29元起",
                            url: "./img/itembanner13.png"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .right {
        width: 65%;
        margin-left: 0.15rem;
    }

    .right img {
        width: 100%;
    }
    .right-banner{
        width:100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-left: 0.15rem;
    }
    .right-banner>div{
        width:30%;
        text-align: center;
        font-size: 0.12rem;
    }
    .right-banner>div img{
        width:100%;
    }
</style>