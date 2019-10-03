/**
 路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'
import Messages from '../views/Messages'
import MessageDetail from '../views/MessageDetail'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            children: [
                {
                    path: 'message',
                    component: Messages,
                    children:[
                        {path: 'detail/:id', component: MessageDetail}
                    ]
                }
            ]
        },
        {
            path: "/about",
            component: About
        }
    ]
})