export default [
    {
        key: '1',
        path: '/login',
        component: '@/pages/login'
    },
    {
        key: '2',
        path: '/',
        component: '@/pages',
        wrappers: ['@/wrappers/auth']
    },
    {
        key: '3',
        path: '/home',
        component: '@/pages/home',
        wrappers: ['@/wrappers/auth']
    },
    {
        key: '4',
        path: '/about',
        component: '@/pages/about',
        wrappers: ['@/wrappers/auth']
    }
];
