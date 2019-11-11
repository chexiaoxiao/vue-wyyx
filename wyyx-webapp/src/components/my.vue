<template>
<div>
    <header>
        <div class="headerCon">
            <div class="headerConTop">
                <img src="../assets/img/2bbe2405bcc99ab49278fc3f1138a578.png" alt="">
                <div></div>
            </div>
            <div class="user">
                <div>
                    <img src="../assets/img/8945ae63d940cc42406c3f67019c5cb6.png" alt="" class="myuserimg">
                    <div>
                        <span>车小小</span>
                    </div>
                </div>
                <div class="super">
                <p>超级会员，立即使用></p>
                </div>
            </div>
            <div class="gong">
            <div><a href="#">本期会员等级已经更新，查看我的特权></a></div>
            </div>
            </div>
    </header>
    <div class="money">
        <div>
            <p>我的资产</p>
        </div>
        <div>
            <div>
                <span>￥0</span>
                <p>回馈金</p>
            </div>
            <div>
                <span>0</span>
                <p>优惠券</p>
            </div>
            <div>
                <span>20</span>
                <p>积分</p>
            </div>
            <div>
                <span>0</span>
                <p>红包</p>
            </div>
            <div>
                <span>0</span>
                <p>礼品卡</p>
            </div>
        </div>
    </div>
<xian-tiao></xian-tiao>

    <table class="center"  cellspacing="0" frame="above" border="0">
        <tr>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -6.48rem"></span>
                    <p>我的订单</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -7.35rem"></span>
                    <p>周六一起拼</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -2.71rem"></span>
                    <p>售后服务</p>
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -5.96rem"></span>
                    <p>邀请返利</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -10.92rem"></span>
                        <p>回馈金卡</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -8.3rem"></span>
                    <p>优先购</p>
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -7.81rem"></span>
                    <p>积分中心</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -6.9rem"></span>
                    <p>会员俱乐部</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -11.86rem"></span>
                    <p>地址管理</p>
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -9.22rem"></span>
                    <p>账号安全</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -4.56rem"></span>
                    <p>帮助与客服</p>
                </a>
            </td>
            <td>
                <a href="#">
                    <span style="background-position: 0.06rem -3.66rem"></span>
                    <p>意见反馈</p>
                </a>
            </td>
        </tr>

    </table>
    <xian-tiao class="mybottom"></xian-tiao>
</div>
</template>

<script>
    import xianTiao from "./views/scan/xianTiao";
    export default {
        name: "my",
        components:{
            xianTiao
        }
    }
</script>

<style scoped>
    .headerCon{
        width:100%;
        height: 2rem;
        background-image: url("../assets/img/d069279e5834bbca17065a9855a014bf.png");
        background-size: 100%;
        background-position: bottom center;
        overflow: hidden;
    }

    .headerConTop{
        margin: 0.1rem auto;
        width:100%;
        display: flex;

    }
    .user>div:nth-of-type(1){
        display: flex;
    }
    .headerConTop>img,.headerConTop>div{
        width: .29rem;
        height: .29rem;
        padding-right: 0.3rem;
    }
    .headerConTop>img{
        padding-left: 2.4rem;
    }
    .headerConTop>div{
        background-image: url("../assets/img/myimg.png");
        background-repeat: no-repeat;
        background-size: 130%;
        background-position: -0.05rem -0.62rem;
    }
    .user{
        width:90%;
        height:1rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .myuserimg{
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
    }
    .user>div>div{
        margin-top: 0.2rem;
        margin-left: 0.15rem;
        color: #fff;
        font-size: .14rem;
    }

.super{
    width: 1.3rem;
    height: 0.55rem;
    background: #444;
    border-top-left-radius: .42rem;
    border-bottom-left-radius: .42rem;
}
    .super p{
        color: #fff;
        font-size: .14rem;
        padding-left: 0.2rem;
        padding-top: 0.08rem;
    }
    .money{
        width:90%;
        margin: 0 auto;
    }
    .money>div:nth-of-type(1)>p{
        font-size: 0.2rem;
    }
    .money>div:nth-of-type(2){
        display: flex;
        justify-content: space-between;
        padding:0.15rem 0;
    }
    .money>div:nth-of-type(3){
        width:100%;
        margin: 0 auto;
        padding-bottom: 0.15rem;
    }
    .money>div:nth-of-type(3) img{
        width:100%;
    }
    .money>div:nth-of-type(2){
        text-align: center;
    }
    .money>div:nth-of-type(2) span{
        font-weight: bold;
    }
    .money>div:nth-of-type(1){
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        border-bottom:0.01rem solid #999999;
    }
    .gong{
        width:90%;
        margin: 0 auto;
        color: #fff;
    }

    .center{
        width: 100%;
        text-align: center;
    }
    .center td{
        padding-top: 0.45rem;
    }
    .center span{
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        margin: 0.01rem auto;
        background-image: url("../assets/img/myimg.png");
        background-size: 100%;
    }
    .center p{
        padding-bottom: 0.2rem;
    }
    table{
        border-collapse:collapse;
        border:0 solid #999;
        margin-bottom: 0.5rem;
    }
    table td{
        border-top:0;
        border-right:0.01rem solid #999;
        border-bottom:0.01rem solid #999;
        border-left:0;
    }
.gong a{
    color: white;
}
</style>