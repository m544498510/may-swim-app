/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export default [
  {
    dName: 'home',
    icon: 'fa-home',
    link: '/'
  },
  {
    dName: '设置',
    icon: 'fa-cog',
    children :[
      {
        dName: 'setting1',
        icon: 'fa-home',
        link: '/setting/setting1'
      },
      {
        dName: 'setting2',
        icon: 'fa-home',
        link: '/setting/setting2'
      }
    ]
  },
  {
    dName: 'test',
    icon: 'fa-flask',
    children :[
      {
        dName: 'test1',
        icon: 'fa-home',
        link: '/test/test1'
      },
      {
        dName: 'test2',
        icon: 'fa-home',
        link: '/test/test2'
      }
    ]
  }
];
