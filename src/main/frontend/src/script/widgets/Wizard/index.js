/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

console.log(PropTypes);
export default class Wizard extends Component {
  static propTypes = {
    completeFunc: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      stepsNum: props.children.length,
      activeIndex: 0,
    };
    this.activateStepByIndex = ::this.activateStepByIndex;
    this.gotoPrevStep = ::this.gotoPrevStep;
    this.gotoNextStep = ::this.gotoNextStep;
  }

  activateStepByIndex(index) {
    const activeIndex = this.state.activeIndex;
    const validateFunc = this.refs.activeStep.validateFunc;
    if (index === activeIndex + 1
      && !(typeof validateFunc === 'function' && !validateFunc())) {

      this.setState({
        activeIndex: index,
      });
    } else if (index < activeIndex) {
      this.setState({
        activeIndex: index,
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
    if (index < this.state.stepsNum) {
      this.activateStepByIndex(index);
    }
  }

  render() {
    const {stepsNum, activeIndex} = this.state;
    const navViews = this.renderNav(this.props.children, activeIndex);
    const progressWidth = calculateProgressWidth(stepsNum, activeIndex);
    const stepView = this.renderStep(this.props.children, activeIndex);
    const buttons = this.renderButtons(stepsNum, activeIndex);
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
        <div className="wizard-step-box">
          {stepView}
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
        <button className="btn btn-green prev-btn" onClick={this.gotoPrevStep}>
          上一步</button>
      );
    }
    if (activeIndex < stepLen - 1) {
      buttons.nextBtn = (
        <button className="btn btn-green next-btn" onClick={this.gotoNextStep}>
          下一步</button>
      );
    }
    const func = this.props.completeFunc;
    if (activeIndex === stepLen - 1 && typeof func === 'function') {
      buttons.completeBtn = (
        <button className="btn btn-green complete-btn" onClick={func}>
          完成</button>
      );
    }
    return buttons;
  }

  renderStep(steps, activeIndex) {
    let newStep;
    const step = steps[activeIndex];
    if (step) {
      newStep = React.cloneElement(step, {ref: 'activeStep'});
    }

    return (
      <div className="wizard-step">
        {newStep}
      </div>
    );
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
          {step.props.title || `step ${i + 1}`}
        </div>,
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
