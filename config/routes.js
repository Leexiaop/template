export default [
    {
        key: '1',
        name: 'login',
        path: '/login',
        component: '@/pages/login'
    },
    {
        key: '2',
        name: 'index',
        path: '/',
        component: '@/pages',
        wrappers: ['@/wrappers/auth']
    },
    {
        key: '3',
        path: '/home',
        name: 'home',
        component: '@/pages/home',
        wrappers: ['@/wrappers/auth']
    },
    {
        key: '4',
        name: 'about',
        path: '/about',
        component: '@/pages/about',
        wrappers: ['@/wrappers/auth']
    }
];
