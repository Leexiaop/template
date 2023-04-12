export default {
    dev: {
        '/api/': {
            // 要代理的地址
            target: 'http://localhost: 8080',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    },
    test: {
        '/api/': {
            // 要代理的地址
            target: 'http://localhost: 8080',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    },
    pre: {
        '/api/': {
            // 要代理的地址
            target: 'http://localhost: 8080',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        }
    }
};
