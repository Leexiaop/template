import routers from './routers';

export default [
    {
        path: '/login',
        component: '@/pages/login'
    },
    {
        path: '/',
        component: '@/pages/index',
        wrappers: ['@/wrappers/auth'],
        routes: [
            {
                path: '/',
                redirect: '/home'
            },
            ...routers
        ]
    }
];
