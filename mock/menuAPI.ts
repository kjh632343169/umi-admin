const menuData = [
  { key: '1', path: '/table' },
  {
    key: '4',
    path: '/detail',
    children: [
      {
        key: '5',
        path: '/detail/detail1111',
      },
      {
        key: '6',
        path: '/detail/detail2222',
      },
    ],
  },
];

export default {
  'GET /api/v1/queryMenuList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: menuData },
      errorCode: 0,
    });
  },
};
