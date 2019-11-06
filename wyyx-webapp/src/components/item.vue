<template>
    <div>
<item-header></item-header>
    <item-center></item-center>
    </div>
</template>


<script>
    import itemHeader from "./views/itemHeader";
    import itemCenter from "./views/itemCenter";
    export default {
        name: "item",
        components:{
            itemHeader,
            itemCenter
        }
    }
</script>

<style scoped>

</style>