/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiEnzyme from 'chai-enzyme'
import fetchMock from 'fetch-mock';


chai.use(sinonChai);
chai.use(chaiEnzyme());

global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();
global.fetchMock = fetchMock;
