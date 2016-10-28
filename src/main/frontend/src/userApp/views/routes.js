import App from './app';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';

export const paths = {
  ROOT: '/',
  SIGN_IN: '/',
  SIGN_UP: '/sign-up'
};


export const getRoutes = () => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: SignIn
        }
      },
      {
        path: paths.SIGN_UP,
        component: SignUp
      }
    ]
  };
};
