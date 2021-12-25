import "./styles.css";
import { Component } from "react";
import ListItem from "./ListItem.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: []
    };
  }

  update = (event) => {
    this.setState({
      item: event.target.value
    });
  };
  onSubmit = () => {
    const newList = [...this.state.items, this.state.item];
    this.setState({
      items: newList
    });
    alert(newList);
  };

  render() {
    const listItem = this.state.items.map((item) => <ListItem item={item} />);
    return (
      <div className="App">
        <input
          placeholder="Write here"
          value={this.state.item}
          onChange={this.update}
        />
        <br />
        <br />
        <button onClick={this.onSubmit}>Add new</button>
        <br />
        <br />
        <ul>{listItem}</ul>
      </div>
    );
  }
}
export default App;
