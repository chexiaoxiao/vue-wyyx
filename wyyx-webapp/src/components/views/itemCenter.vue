<template>
<div class="con">
    <item-center-left></item-center-left>
    <item-center-right></item-center-right>
</div>

</template>

<script>
    import itemCenterLeft from "./itemCenterLeft";
    import itemCenterRight from "./itemCenterRight";
    export default {
        name: "itemCenter",
        components:{
            itemCenterLeft,
            itemCenterRight
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