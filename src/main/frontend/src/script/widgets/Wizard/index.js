/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import WizardStep from './WizardStep';

export default class Wizard extends Component {

  constructor(props, context) {
    super(props, context);

    const steps = calculateSteps(props.children);
    this.state = {
      steps,
      activeIndex: 0
    }
  }

  render() {
    const {steps, activeIndex}= this.state;
    const navViews = renderNav(steps, activeIndex);
    const progressWidth = calculateProgressWidth(steps.length,activeIndex);

    return (
      <div className="wizard">
        <nav className="wizard-nav">
          {navViews}
        </nav>
        <div className="progress">
          <div className="progress-bar" role="progressbar"
               style={{width: progressWidth}}>
          </div>
        </div>
        <div className="wizard-steps">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function calculateProgressWidth(totalNum, activeIndex) {
  const tmp = activeIndex + 1;
  if (totalNum === tmp) {
    return '100%';
  } else {
    return parseInt(tmp / totalNum * 100) + '%';
  }
}

function renderNav(steps, activeIndex) {
  const navs = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const activeClassName = activeIndex === i ? 'active' : '';
    navs.push(
      <div className={`wizard-nav-item ${activeClassName}`} key={i}>
        {step.title}
      </div>
    );
  }
  return navs;
}

function calculateSteps(steps) {
  const stepsInfo = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step.type !== WizardStep) {
      stepsInfo.push({
        title: step.props.title,
        validateFunc: step.props.validateFunc
      });
    }
  }
  return stepsInfo;
}
