// 参考配置  https://umijs.org/docs/max/layout-menu#%E6%89%A9%E5%B1%95%E7%9A%84%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
    key: '1',
  },
  {
    name: ' 测试页面',
    path: '/testPage',
    component: './TestPage',
    key: '2',
    routes: [
      {
        name: ' 测试页面111',
        path: '/testPage/testPage111',
        component: './TestPage/TestPage111',
        key: '3',
      },
    ],
  },
  {
    name: ' 详情页',
    path: '/detail',
    component: './Detail',
    key: '4',
    routes: [
      {
        name: ' 详情页1111',
        path: '/detail/detail1111',
        component: './Detail/Detail1111',
        key: '5',
      },
      {
        name: ' 详情页2222',
        path: '/detail/detail2222',
        component: './Detail/Detail2222',
        key: '6',
      },
    ],
  },
];
