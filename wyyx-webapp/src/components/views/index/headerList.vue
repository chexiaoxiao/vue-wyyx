<template>
    <div>
        <a href="#" v-for="(msg,u) in data" :key="u" :class="index === u? 'red': 'black'" @click="changeColor(u)">{{msg}}</a>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              index:0
          }
        },
        props:["data"],
        name: "headerList",
        methods:{
            changeColor(u){
                this.index=u
            }
        }
    }
</script>

<style scoped>
    div{
        width:90%;
        margin:0 auto;
        display:flex;
        justify-content: space-around;
    }
a{
    display: block;
    padding-bottom: 0.02rem;
}
    .red{
        color: #d81e06;
        border-bottom:0.03rem solid #d81e06;
    }
    .black{
        color: black;
    }
</style>