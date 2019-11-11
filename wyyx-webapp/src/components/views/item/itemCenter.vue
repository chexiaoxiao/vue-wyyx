<template>
<div class="con">
    <item-center-left :data="data" @listIndex="listIndex"></item-center-left>
    <item-center-right :data="data.nav[u]" v-if="(data.nav && u<4)"></item-center-right>
    <item-center-right-other :data="data.nav[u]" v-else-if="(data.nav && u>=4)"></item-center-right-other>

</div>

</template>

<script>
    import itemCenterLeft from "./itemCenterLeft";
    import itemCenterRight from "./itemCenterRight";
    import itemCenterRightOther from "./itemCenterRightOther";
    export default {
        name: "itemCenter",
        components:{
            itemCenterLeft,
            itemCenterRight,
            itemCenterRightOther
        },
        props:["data"],
        data(){
            return {
                u:0,
                flag:false
            }
        },
        methods:{
            listIndex(u){
                this.u=u;
            }
        }
    }
</script>

<style scoped>
.con{
    width:100%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    padding-top: 0.05rem;
    display:flex;
}
</style>