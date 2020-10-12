const routers = [
    {
        path: '/',
        meta: {
            title: '文件上传'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];
export default routers;