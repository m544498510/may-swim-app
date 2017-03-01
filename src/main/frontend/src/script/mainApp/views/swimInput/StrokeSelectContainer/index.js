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
    strokeList: PropTypes.array.isRequired
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
      <Dropdown>
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

export default connect(mapStateToProps, null)(StrokeSelectContainer);
