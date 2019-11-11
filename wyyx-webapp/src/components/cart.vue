<template>
        <div>
            <header>
                <p>购物车&nbsp;(0)</p>
                <div class="home-login">
                    <a class="home" href="#/"><img src="../assets/img/homeicon.png"/>
                    </a>
                    <a class="login" href="#/main/my">登录</a>
                </div>
            </header>
            <main>
                <div>
                    <img src="../assets/img/cart2.png"/>
                    <p>购物车空空如也，赶紧去逛逛吧!</p>
                    <div><a href="#/">去逛逛</a></div>
                </div>
            </main>
        </div>
</template>

<script>
    export default {
        name: "cart"
    }
</script>

<style scoped>
.cartTop{
    width:100%;
    background-color: white;
}
.cartTop>div{
    width:90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
.cartTop>div>p{
    display: block;
}
.cartTop>div>p:nth-of-type(1){
    font-size: .48rem;
}
header{
    border-bottom: 1px solid #f0f0f0;
}
header p{
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    font-size: 0.18rem;
}
.home-login{
    display: flex;
    position: absolute;
    top: 0.1rem;
    right: 0.15rem;
}
.home>img{
    width: 0.22rem;
    height: 0.22rem;
}
.login{
    margin-left: 0.15rem;
    font-size: 0.10rem;
    margin-top: 1px;
    width: 0.36rem;
    height: 0.2rem;
    line-height: 0.2rem;
    text-align: center;
    color: #e31436;
    border: 1px solid #e31436;
    border-radius: 3px;
}
main>div{
    text-align: center;
    padding-top: 1.86rem;
    font-size: 0.15rem;
}
main>div>img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
}
main>div>p{
    margin: 0.2rem 0 0.3rem;
}
main>div>div>a{
    display: inline-block;
    width: 1.2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    color: #ffffff;
    background-color: #e31436;
    border-radius: 0.03rem;
}

</style>