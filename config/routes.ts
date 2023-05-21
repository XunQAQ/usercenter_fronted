export default [
  {
    path: '/user',
    name: 'user',
    layout: false,
    routes: [
      {
        path: '/user', routes: [
          {name: 'Log_In', path: '/user/login', component: './user/Login'},
          {name: 'Sign_Up', path: '/user/register', component: './user/Register'}
        ]
      },
      {component: './404'},
    ],
  },
  {path: '/welcome', name: 'Welcome', icon: 'smile', component: './Welcome'},
  {
    path: '/admin',
    name: 'Admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {path: '/admin/user-manage', name: 'User Management', icon: 'smile', component: './Admin/UserManage'},
      {component: './404'},
    ],
  },
  {name: 'About the Application', icon: 'table', path: '/list', component: './TableList' },
  {path: '/',name: '/', redirect: '/welcome'},
  {component: './404'},
];
