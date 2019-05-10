import Router from 'vue-router';


const routes = [{
    path: '/',
    redirect: '/home',
},
    {
        path: '/home',
        component: () => import('../view/home/index.vue'),
        children: [
            {
                path: '/',
                redirect: 'recommend',
            },
            {
                path: 'recommend',
                name: 'recommend',
                component: () =>
                    import('../view/recommend/index.vue'),
            },
            {
                path: 'my-page',
                name: 'myPage',
                component: () =>
                    import('../view/my/index.vue'),
            },
            {
                path: 'log',
                name: 'log',
                component: () =>
                    import('../view/log/index.vue'),
            },
        ]
    },
    {
        path: '/home/sceneAddCon',
        name: 'sceneAddCon',
        component: () => import('../view/scene/condition/sceneAddCon.vue')
    },
    {
        path: '/home/sceneAddResult',
        name: 'sceneAddResult',
        component: () => import('../view/scene/condition/sceneAddResult.vue')
    },
    {
        path: '/home/sceneAddManual',
        name: 'sceneAddManual',
        component: () => import('../view/scene/manual/sceneAddManual.vue')
    },
    {
        path: '/home/sceneAddDevice',
        name: 'sceneAddDevice',
        component: () => import('../view/scene/device/sceneAddDevice.vue')
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
        path: '/log/chooseTime',
        name: 'chooseTime',
        component: () => import('../view/log/chooseTime.vue')
    },
    {
        path: '/recommend/strategy',
        name: 'strategy',
        component: () =>
            import('../view/recommend/strategy.vue')
    },
    {
        path: '/recommend/offWork',
        name: 'offWork',
        component: () =>
            import('../view/recommend/offWork.vue')
    },
    {
        path: '/my/timing',
        name: 'timing',
        component: () =>
            import('../view/my/timing.vue')
    },
    {
        path: '/home//monitorList',
        name: 'monitorList',
        component: () =>
            import('../view/scene/condition/monitorList.vue')
    },
    {
        path: '/home//selectCondition',
        name: 'selectCondition',
        component: () =>
            import('../view/scene/condition/selectCondition.vue')
    },
];

const router = new Router({
    routes
});

export default router;
