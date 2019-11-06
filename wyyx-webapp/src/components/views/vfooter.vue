<template>
    <footer>
       <div v-for="(data,index) in footerNav.tabs" :key="index" >
           <a :href="data.url" @click="changeStyle(index)"><img :src="current===index?data.activePic:data.normalPic" alt="">
           <p :class="current===index?'red':'black'">{{data.name}}</p>
           </a>
       </div>
    </footer>
</template>

<script>
    export default {
        name: "vFooter",
        data() {
            return {
                footerNav: {
                    tabs: [
                        {
                            name: "首页",
                            normalPic: "./img/index.png",
                            activePic: "./img/redindex.png",
                            url:""
                        },
                        {
                            name: "分类",
                            normalPic: "./img/item.png",
                            activePic: "./img/reditem.png",
                            url:"#/main/item"
                        },
                        {
                            name: "识物",
                            normalPic: "./img/scan.png",
                            activePic: "./img/redscan.png",
                            url:"#/main/scan"
                        },
                        {
                            name: "购物车",
                            normalPic: "./img/cart.png",
                            activePic: "./img/redcart.png",
                            url:"#/main/cart"
                        },
                        {
                            name: "个人",
                            normalPic: "./img/my.png",
                            activePic: "./img/redmy.png",
                            url:"#/main/my"
                        }

                    ]
                },
                current:0
            }
        },
        methods:{
            changeStyle(index){
                this.current=index;
            }
        }
    }

</script>

<style scoped>
    footer{
        border-top:0.01rem solid rgb(237,237,237);
        position: fixed;
        bottom: 0;
        width:100%;
        margin: 0 auto;
        padding-top:0.05rem;
        padding-bottom:0.05rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        text-align: center;
        background-color: white;
    }
    footer img{
        margin: 0 auto;
        width:0.25rem;
        height:0.25rem;
        /*padding-bottom: 0.05rem;*/
    }
    .red{
        color:#d81e06;
    }
</style>