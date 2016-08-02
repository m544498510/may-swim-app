/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import  React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

export default class AppRounter extends  Component{
  render(){
    return
      <Router history={history}>
        <Route path="/" component={OtherFrame}>
          <Route path="/login" component={Login} />
        </Route>
        <Route path="/" component={OtherFrame2}>
          <Route path="/register" component={Register} />
        </Route>
      </Router>

  }
}
