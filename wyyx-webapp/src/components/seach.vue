<template>
    <div>
        <div class="seach">
        <div class="top">
            <div><input type="text" placeholder="可机洗羊毛衫169元" value=""></div>
            <div><button><a href="">取消</a></button></div>
        </div>
        <p>热门搜索</p>
        <div class="myseach">
            <button>电动牙刷69元起</button>
            <button>按摩电器</button>
            <button>11.11必买爆品</button>
            <button>秋冬床品199元起</button>
            <button>高级轻薄羽绒服</button>
            <button>降噪耳机</button>
            <button>拖鞋</button>
            <button>羽绒服</button>
            <button>猫粮</button>
            <button>床垫</button>
            <button>男鞋</button>
            <button>纸巾</button>
        </div>
    </div>

    </div>
</template>

<script>
    export default {
        name: "seach"
    }
</script>

<style scoped>
    .seach{
        width:90%;
        margin: 0 auto;
    }
    .top{
        display:flex;
        width:100%;
        margin: 0 auto;
        margin-top:0.15rem;
        margin-bottom: 0.15rem;
        padding-bottom: 0.15rem;
        justify-content: space-around;
        border-bottom: 0.001rem solid rgb(238,238,238);
    }
.top input{
        width:2.8rem;
        height:0.25rem;
        background-color: rgb(238,238,238);
        border:none;
        border-radius: 0.05rem;
        outline: none;
        text-align:center;
    }
    .top button{
        border:none;
        background:none;
        outline: none;
    }
    p{
       color: gray;
    }
    .myseach{
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }
    .myseach button{
        display: block;
        margin:0.1rem 0.05rem 0.05rem 0.05rem;
        background: none;
        border: 0.01rem solid rgb(238,238,238);
        outline: none;
    }

</style>