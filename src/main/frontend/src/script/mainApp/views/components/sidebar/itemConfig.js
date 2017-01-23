/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

export default [
  {
    dName: 'home',
    icon: 'fa-home',
    path: '/home'
  },
  {
    dName: '游泳信息录入',
    icon: 'fa-pencil',
    path: '/swimmingInput'
  },
  {
    dName: '设置',
    icon: 'fa-cog',
    path: '/setting',
    children: [
      {
        dName: 'setting1',
        path: '/setting1'
      },
      {
        dName: 'setting2',
        path: '/setting2'
      }
    ]
  },
  {
    dName: 'test',
    icon: 'fa-flask',
    path: '/test',
    children: [
      {
        dName: 'test1',
        path: '/test1'
      },
      {
        dName: 'test2',
        path: '/test2'
      }
    ]
  }
];
