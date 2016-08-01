/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import  {render} from 'react';
import {Router, Route, hashHistory} from 'react-router';


export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="foo" component={Foo}/>
      <Route path="bar" component={Bar}/>
    </Route>
  </Router>
);
