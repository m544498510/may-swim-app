/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component, PropTypes} from "react";

export default class Wizard extends Component {
  static propTypes = {
    completeFunc: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);

    const steps = calculateSteps(props.children);
    this.state = {
      steps,
      activeIndex: 0
    };
    this.activateStepByIndex = ::this.activateStepByIndex;
    this.gotoPrevStep = ::this.gotoPrevStep;
    this.gotoNextStep = ::this.gotoNextStep;
  }

  activateStepByIndex(index) {
    const step = this.state.steps[index];
    const activeIndex = this.state.activeIndex;
    if ( index === activeIndex + 1
      && step && step.validateFunc()) {
      this.setState({
        activeIndex: index
      });
    }else if(index < activeIndex){
      this.setState({
        activeIndex: index
      });
    }
  }

  gotoPrevStep() {
    const index = this.state.activeIndex - 1;
    if (index > -1) {
      this.activateStepByIndex(index);
    }
  }

  gotoNextStep() {
    const index = this.state.activeIndex + 1;
    if (index < this.state.steps.length) {
      this.activateStepByIndex(index);
    }
  }

  render() {
    const {steps, activeIndex}= this.state;
    const navViews = this.renderNav(steps, activeIndex);
    const progressWidth = calculateProgressWidth(steps.length, activeIndex);
    const stepViews = this.renderSteps(this.props.children, activeIndex);
    const buttons = this.renderButtons(steps.length, activeIndex);
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
        <div className="wizard-btn-box">
          {buttons.prevBtn}
          {buttons.nextBtn}
          {buttons.completeBtn}
        </div>
      </div>
    );
  }

  renderButtons(stepLen, activeIndex) {
    const buttons = {};
    if (activeIndex > 0) {
      buttons.prevBtn = (
        <button className="btn btn-green prev-btn" onClick={this.gotoPrevStep}>上一步</button>
      );
    }
    if (activeIndex < stepLen - 1) {
      buttons.nextBtn = (
        <button className="btn btn-green next-btn" onClick={this.gotoNextStep}>下一步</button>
      );
    }
    const func = this.props.completeFunc;
    if (activeIndex === stepLen - 1 && typeof func === 'function') {
      buttons.completeBtn = (
        <button className="btn btn-green complete-btn" onClick={func}>完成</button>
      );
    }
    return buttons;
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
          onClick={() => this.activateStepByIndex(i)}
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
