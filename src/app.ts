// 运行时配置
import MenuService from '@/services/menu';
import { RuntimeConfig } from 'umi';
import patchRoute from '../config/patchRoute';

const { MenuController } = MenuService;
let menuData: any;

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: '@umijs/max' };
// }

export const getInitialState: RuntimeConfig['getInitialState'] =
  async (): Promise<{ name: string }> => {
    return { name: '@umijs/max' };
  };

export const layout: RuntimeConfig['layout'] = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    layout: 'mix',
    menu: {
      locale: false,
    },
    breadcrumbRender: (route = []) => {
      // 面包屑相关配置
      const newRoute = route.map((item: any, index) => {
        return {
          ...item,
          linkPath: index === 0 ? '' : item.linkPath,
        };
      });
      return newRoute;
    },
  };
};

export const render: RuntimeConfig['render'] = async (oldRender) => {
  const result = await MenuController.getMenuList();
  console.log(result);
  menuData = result.data.list;
  oldRender();
};

export const patchClientRoutes: RuntimeConfig['patchClientRoutes'] = ({
  routes,
}) => {
  // 根据后台菜单返回路由表
  const layoutRoute = routes.find((i: any) => i.isLayout);
  const trueRoutes = patchRoute(layoutRoute.children, menuData);
  layoutRoute.children = trueRoutes;
};
