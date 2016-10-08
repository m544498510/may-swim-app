import {App} from './app';
import {SignIn} from './pages/sign-in';
import {SignUp} from './pages/sign-up';

export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up'
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    indexRoute: { onEnter: (nextState, replace) => replace(paths.SIGN_IN) },
    childRoutes: [
      {
        path: paths.SIGN_IN,
        component: SignIn
      },
      {
        path: paths.SIGN_UP,
        component: SignUp
      }
  ]

};
}
;
