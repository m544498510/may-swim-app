/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import * as stroke from "mainApp/core/swim/stroke";
import {Dropdown,DropdownMenu,DropdownToggle,DropdownItem} from "widgets/Dropdown";

export class StrokeSelectContainer extends Component {
  static propTypes = {
    strokeList: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.clickItem = ::this.clickItem;
  }

  clickItem(evt) {

  }

  renderItems() {
    return this.props.strokeList.map((stroke) => {
      return (
        <DropdownItem
          key={stroke.strokeId}
          onClick={this.clickItem}
          tag="div"
        >
          stroke.strokeDes
        </DropdownItem>
      );
    });
  }


  render() {
    return (
      <Dropdown>
        <DropdownToggle>{this.state.value}</DropdownToggle>
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
