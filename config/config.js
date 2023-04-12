import {defineConfig} from 'umi';
import pxtorem from 'postcss-pxtorem';
import {resolve} from 'path';
import routes from './routes';
import proxy from './proxy';

const {REACT_APP_ENV} = process.env;

export default defineConfig({
    title: 'H5模版',
    nodeModulesTransform: {
        type: 'none'
    },
    layout: false,
    history: {
        type: 'hash'
    },
    antd: {
        mobile: false
    },
    routes,
    define: {
        CESIUM_BASE_URL: ''
    },
    proxy: proxy[REACT_APP_ENV || 'dev'],
    publicPath: './',
    base: '/',
    runtimePublicPath: true,
    dva: {
        immer: true
    },
    fastRefresh: {},
    alias: {
        '@': resolve(__dirname, './src')
    },
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 75, // UI设计图宽为75px
            propList: [
                '*',
                '!border',
                '!border-top',
                '!border-right',
                '!border-bottom',
                '!border-left',
                '!border-width'
            ],
            selectorBlackList: ['html']
        })
    ]
});
