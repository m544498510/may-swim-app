import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool,
};

const defaultProps = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary',
};

const contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

class DropdownToggle extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle();
  }

  render() {
    const { className, cssModule, caret, split, nav, tag, ...props } = this.props;
    const ariaLabel = props['aria-label'] || 'Toggle Dropdown';

    let Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = 'button';
    } else {
      Tag = tag;
    }

    const classes = mapToCssModules(classNames(
      className,
      {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav,
        'btn': Tag === 'button'
      }
    ), cssModule);
    const children = props.children || <span className="sr-only">{ariaLabel}</span>;

    let caretHtml;
    if(caret){
      caretHtml = <span className="caret" />;
    }



    return (
      <Tag
        {...props}
        className={classes}
        onClick={this.onClick}
        aria-haspopup="true"
        aria-expanded={this.context.isOpen}
      >
        {children}
        {caretHtml}
      </Tag>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextTypes = contextTypes;

export default DropdownToggle;
