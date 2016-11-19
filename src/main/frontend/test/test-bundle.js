/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai);
chai.use(chaiAsPromised);
chai.use(chaiEnzyme());

global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();
