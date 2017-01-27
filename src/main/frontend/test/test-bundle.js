/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import fetchMock from 'fetch-mock';
import {shallow,mount,render} from 'enzyme';

chai.use(sinonChai);

global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();
global.fetchMock = fetchMock;
global.shallow = shallow;
global.mount = mount;
global.render = render;
