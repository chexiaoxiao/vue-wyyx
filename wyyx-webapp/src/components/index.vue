<template>
    <div>
        <v-header></v-header>
        <headerList></headerList>

    </div>
</template>

<script>
    import vHeader from "./views/header"
    import headerList from "./views/headerList";
    export default {
        name: "index",
        components:{
            vHeader,
            headerList
        }
    }
</script>

<style scoped>

</style>