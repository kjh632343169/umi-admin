const loop = (menuItem, curRoute, route) => {
  if (menuItem.children && menuItem.children.length) {
    route.children = [];
    menuItem.children.map((item, index) => {
      const curRouteChildItem = curRoute.children.find((i: any) => {
        return i.path === item.path || i.key === item.key;
      });
      route.children.push(curRouteChildItem);
      loop(item, curRouteChildItem, route.children[index]);
      return '';
    });
  }
};

const patchRoute = (layoutRoutes: any[], menuData: any = []) => {
  const routes: any[] = [];
  menuData.map(async (item) => {
    const curLayoutRoute = layoutRoutes.find((i: any) => {
      return i.path === item.path || i.key === item.key;
    });
    let routeItem: any = {};
    routeItem = { ...curLayoutRoute };
    delete routeItem.children;
    loop(item, curLayoutRoute, routeItem);
    routes.push(routeItem);
    return '';
  });
  return routes;
};

export default patchRoute;
