<template>
    <ul>
        <li v-for="(msg,u) in data.dataList" :key="u"><a href="#" :class="index===u?'red':'normal'" @click.prevent="changeStyle(u)">{{msg}}</a></li>
    </ul>
</template>

<script>
    export default {
        name: "itemCenterLeft",
        data() {
            return {
                // dataList: ["双11专区", "暖冬好物", "爆品专区", "新品专区", "居家生活", "服饰鞋包", "美食酒水", "个护清洁", "母婴亲子", "运动旅行", "数码家电", "全球特色"],
                index: 0
            }
        },
        methods: {
            changeStyle(u) {
                this.index = u;
                this.$emit("listIndex",u)
            }
        },
        props:["data"]
    }
</script>

<style scoped>
    ul {
        width: 25%;
        border-right: 0.01rem solid rgb(238, 238, 238);
    }

    li {
        padding: 0.14rem 0;

    }

    a {
        padding-left: 0.2rem;
    }

    .red {
        color: #d81e06;
        border-left: 0.03rem solid #d81e06;
    }
</style>