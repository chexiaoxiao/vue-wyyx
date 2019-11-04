import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../src/components/index"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            component: index
        }
    ]
})
