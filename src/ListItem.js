import React, { Component, Fragments } from "react";
class ListItem extends Component {
  render() {
    const { item } = this.props.item;
    return (
      <Fragments>
        <li>{item}</li>
      </Fragments>
    );
  }
}
export default ListItem;
