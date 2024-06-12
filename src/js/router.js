import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    //mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/Home.vue')
        },
        {
            path: '/blog-post', ///:title
            name: 'blog-post',
            component: () => import('@/components/BlogPage.vue'),
            props: true
        }
    ]
})

export default router
