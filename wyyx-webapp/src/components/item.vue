<template>
    <div>
    <item-header></item-header>
    <item-center :data="data"></item-center>
    </div>
</template>


<script>
    import itemHeader from "./views/item/itemHeader";
    import itemCenter from "./views/item/itemCenter";
    import api from "../api/api";
    export default {
        name: "item",
        components:{
            itemHeader,
            itemCenter
        },
        methods:{
            async _initItemData(){
                let data = await api.getItemData()
                this.data=data
            }
        },
        beforeMount() {
            this._initItemData()
        },
        data(){
            return {
                data:[]
            }
        }
    }
</script>

<style scoped>

</style>