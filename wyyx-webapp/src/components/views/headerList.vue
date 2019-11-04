<template>
    <div>
        <a href="#" v-for="(data,u) in msg" :key="u" :class="index === u? 'red': 'black'" @click="changeColor(u)">{{data}}</a>
    </div>
</template>

<script>
    export default {
        data(){
          return {
              msg: ["推荐", "居家生活", "服饰鞋服", "美食酒水","个护清洁"],
              index:0
          }
        },
        name: "headerList",
        methods:{
            changeColor(u){
                this.index=u;
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
        color: red;
        border-bottom:0.03rem solid red;
    }
    .black{
        color: black;
    }
</style>