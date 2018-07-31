import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };

    this.increaseQty = this.increaseQty.bind(this);
  }

  increaseQty() {
    this.setState(prevState => ({
      isOpen: !this.state.isOpen
    }));
  }

  render() {
    const div = this.state.isOpen && (
      <div className="spisok">
        <ul className="ul">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </div>
    );
    return (
      <div className="App">
        <button className="button" onClick={this.increaseQty}>
          Кнопка
        </button>
        {div}
      </div>
    );
  }
}

export default App;
