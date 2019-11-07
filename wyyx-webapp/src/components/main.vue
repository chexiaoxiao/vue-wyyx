<template>
    <div>
    <router-view></router-view>
    <v-footer></v-footer>
    </div>
</template>

<script>
    import vFooter from "./views/vfooter";
    export default {
        name: "vmain",
        components:{
            vFooter
        }
    }
</script>

<style scoped>

</style>