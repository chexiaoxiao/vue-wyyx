<template>
    <div class="xuanmei">
        <div>
        <span class="spanImg"><img src="../../../assets/img/mei.jpg" alt="" class="mei"></span><span class="xu">选妹</span>
            <p>{{data.title}}</p>
        <img :src="data.imgUrl" alt="" class="canterBanner">
        <span class="spanImg"><img src="../../../assets/img/reader.png" alt="" class="reader"></span><span class="number">{{data.bannerSpan}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'myBanner',
        props:["data"]
    }
</script>

<style scoped>
.xuanmei{
    padding: 0.15rem 0;
    width: 100%;
    background: #fff;
    margin: 0 auto;
}
.xuanmei img{
    display: inline-block;
}
.xuanmei>div{
    width:90%;
    margin: 0 auto;
}
    .mei{
        width:0.28rem;
        height:0.28rem;
        border-radius: 50%;
    }
    .xu{
        padding-left: 0.1rem;
        font-size: .14rem;
        color: #333;
        line-height: .14rem;
    }
    .xuanmei p{
        margin: 0.05rem auto;
        font-size: .18rem;
        color: #333;
        line-height: .26rem;
        /*margin: -.04rem 0 .08rem 0;*/
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .spanImg{
        vertical-align: middle;
    }
    .canterBanner{
        width:100%;
    }
    .reader{
        width:0.23rem;
    }
    .number{
        font-size: .11rem;
        color: #999;
        /*line-height: .1rem;*/
    }
</style>