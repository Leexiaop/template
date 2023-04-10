export default [
    {
        key: '1',
        path: '/home',
        component: '@/pages/home',
        label: 'HOME'
    },
    {
        key: '2',
        label: 'ABOUT',
        children: [
            {
                key: '2-1',
                path: '/about',
                component: '@/pages/about',
                label: 'ABOUT'
            }
        ]
    }
];
