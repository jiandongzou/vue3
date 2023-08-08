export default [
    {
        url: '/api/menu',
        method: 'get',
        response: () => {
            const menu = [
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'icon-all',
                            path: 'home',
                            element: 'home/index',
                            meta: {
                                title: '首页',
                                auth: true
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                           {
                            icon: 'icon-cry',
                            path: 'error',
                            meta: {
                                title: '错误页面'
                            },
                            children: [
                                {
                                    icon: 'icon-cry',
                                    path: '403',
                                    element: 'error/403/index',
                                    meta: {
                                        title: '403页面'
                                    }
                                },
                                {
                                    icon: 'icon-cry',
                                    path: '404',
                                    element: 'error/404/index',
                                    meta: {
                                        title: '404页面'
                                    }
                                }
                            ]
                        }
                    ]
                }
               
               
            ]

            return {
                code: 200,
                message: 'ok',
                data: menu
            }
        }
    }
]
