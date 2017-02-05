/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';

export default class Wizard extends Component {

  constructor(props, context) {
    super(props, context);

    const steps = calculateSteps(props.children);
    this.state = {
      steps,
      activeIndex: 0
    };
    this.activateStepByIndex = ::this.activateStepByIndex;
  }

  activateStepByIndex(index) {
    const step = this.state.steps[index];
    const activeIndex = this.state.activeIndex;
    if ((index < activeIndex || index === activeIndex + 1)
      && step && step.validateFunc()) {
      this.setState({
        activeIndex: index
      });
    }
  }

  render() {
    const {steps, activeIndex}= this.state;
    const navViews = this.renderNav(steps, activeIndex);
    const progressWidth = calculateProgressWidth(steps.length, activeIndex);
    const stepViews = this.renderSteps(this.props.children, activeIndex);
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
          {stepViews}
        </div>
      </div>
    );
  }

  renderSteps(steps, activeIndex) {
    const newStepView = [];
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      let newStep;
      if (i !== activeIndex) {
        newStep = React.cloneElement(step, {isActive: false, key: i});
      } else {
        newStep = React.cloneElement(step, {isActive: true, key: i});
      }
      newStepView.push(newStep);
    }
    return newStepView;
  }

  renderNav(steps, activeIndex) {
    const navs = [];
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const activeClassName = activeIndex === i ? 'active' : '';
      navs.push(
        <div
          className={`wizard-nav-item ${activeClassName}`}
          key={i}
          onClick={()=>this.activateStepByIndex(i)}
        >
          {step.title}
        </div>
      );
    }
    return navs;
  }

}

function calculateProgressWidth(totalNum, activeIndex) {
  const tmp = activeIndex + 1;
  if (totalNum === tmp) {
    return '100%';
  } else {
    return parseInt(tmp / totalNum * 100, 10) + '%';
  }
}

function calculateSteps(steps) {
  const stepsInfo = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    if (step.type.name === 'WizardStep') {
      stepsInfo.push({
        title: step.props.title,
        validateFunc: step.props.validateFunc
      });
    }
  }
  return stepsInfo;
}
