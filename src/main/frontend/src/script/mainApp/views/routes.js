import App from './app';

export const paths = {
  ROOT: '/',
  SIGN_IN: '/',
};


export const getRoutes = () => {
  return {
    path: paths.ROOT,
    component: App,
/*
    childRoutes: [
      {
        indexRoute: {
          component: '<div></div>'
        }
      }
    ]
*/
  };
};
