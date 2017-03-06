/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import * as stroke from "mainApp/core/swim/stroke";
import {Dropdown, DropdownMenu, DropdownToggle, DropdownItem} from "widgets/Dropdown";

export class StrokeSelectContainer extends Component {
  static propTypes = {
    strokeList: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.strokeList[0]
    };
    this.clickItem = ::this.clickItem;
  }

  clickItem(itemValue) {
    this.setState({
      value: itemValue
    });
    this.props.onUpdate(itemValue)
  }

  renderItems() {
    return this.props.strokeList.map((stroke) => {
      return (
        <DropdownItem
          key={stroke.strokeId}
          onClick={this.clickItem}
          tag="div"
          value={stroke}
        >
          {stroke.strokeDes}
        </DropdownItem>
      );
    });
  }


  render() {
    const value = this.state.value ? this.state.value : this.props.strokeList[0];
    const name = value ? value.strokeDes : '';
    return (
      <Dropdown className="selector">
        <DropdownToggle
          caret={true}
          className="btn-default btn-sp"
        >{name}</DropdownToggle>
        <DropdownMenu >
          {this.renderItems()}
        </DropdownMenu>
      </Dropdown>
    );
  }

}

const mapStateToProps = (state) => ({
  strokeList: stroke.selectors.getStrokeList(state)
});

const WrapperTmp = connect(mapStateToProps, null, null, {withRef: true})(StrokeSelectContainer);

//用于解决react-redux处理后无法贡献focus api 的问题
export default class extends Component {
  focus() {
  }

  render() {
    return (
      <WrapperTmp {...this.props} />
    );
  }
}
