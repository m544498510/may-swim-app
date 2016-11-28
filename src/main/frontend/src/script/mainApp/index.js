/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill';
import 'isomorphic-fetch';

import {AppContainer} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux';

