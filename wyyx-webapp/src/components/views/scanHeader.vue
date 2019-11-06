<template>
    <div class="scanHeader">
        <img src="../../assets/img/index.png" alt="">
        <div>
            <a href="#" v-for="(u,index) in topNav" :key="index" :class="myindex===index?'red':'normal'" @click="changeStyle(index)">{{u}}</a>
        </div>
        <img src="../../assets/img/seach.png" alt="">
        <img src="../../assets/img/cart.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "scanHeader",

        data(){
            return  {
                topNav:["发现","甄选家"],
                myindex:0
            }
        },
        methods:{
            changeStyle(index){
                this.myindex=index;
            }
        }
    }
</script>

<style scoped>
.scanHeader{
    width:90%;
    height: 0.5rem;
    margin: 0.1rem auto;
    display: flex;
    justify-content: space-between;
}
.scanHeader>div{
    width:60%;
    text-align: center;
}
.scanHeader>div>a{
    margin: 0 0.1rem;
}
.scanHeader img{
    width:0.28rem;
    height:0.28rem;
}
.red{
        color: #d81e06;
        font-size: 0.2rem;
    font-weight: bold;
    }
</style>