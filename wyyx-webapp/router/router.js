import Vue from 'vue'
import VueRouter from 'vue-router'
import main from "../src/components/main"
import index from "../src/components/index"
import item from "../src/components/item"
import scan from "../src/components/scan"
import cart from "../src/components/cart"
import my from "../src/components/my"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path: '/',
            redirect:'/main'
        },
        {
            path: '/main',
            component: main,
            children:[
                {
                    path: '',
                    component: index
                },
                {
                    path: 'item',
                    component: item
                },
                {
                    path: 'scan',
                    component: scan
                },
                {
                    path: 'cart',
                    component: cart
                },
                {
                    path: 'my',
                    component: my
                }
            ]
        }
    ]
})
