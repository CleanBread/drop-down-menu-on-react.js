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
          <a href="#">
            <li>HTML</li>
          </a>
          <a href="#">
            <li>CSS</li>
          </a>
          <a href="#">
            <li>REACT</li>
          </a>
          <a href="#">
            <li>ANGULAR</li>
          </a>
        </ul>
      </div>
    );
    return (
      <div className="App">
        <button className="button" onClick={this.increaseQty}>
          {this.state.isOpen ? "Закрыть" : "Открыть"}
        </button>
        {div}
      </div>
    );
  }
}

export default App;
