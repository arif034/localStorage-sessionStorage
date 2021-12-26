import React from "react";
class ListItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <React.Fragment>
        <li>{item}</li>
      </React.Fragment>
    );
  }
}
export default ListItem;
