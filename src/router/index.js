import Router from 'vue-router';


const routes = [{
    path: '/',
    redirect: '/home',
},
    {
        path: '/home',
        component: () =>
            import('../view/home/index.vue'),

        children: [
            {
                path: '/',
                redirect: 'recommend',
            },
            {
                path: 'recommend',
                component: () =>
                    import('../view/recommend/index.vue'),
            },
            {
                path: 'my-page',
                component: () =>
                    import('../view/my/index.vue'),
            },
            {
                path: 'log',
                component: () =>
                    import('../view/log/index.vue'),
            },
        ]
    },
    {
        path: '/log/detail',
        name: 'logDetail',
        component: () => import('../view/log/logDetail.vue')
    },
    {
        path: '/log/more',
        name: 'logDetailMore',
        component: () => import('../view/log/logDetailMore.vue')
    },
    {
        path: '/strategy',
        component: () =>
            import('../view/recommend/strategy.vue')
    },
];

const router = new Router({
    routes
});

export default router;
