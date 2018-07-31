import React, { Component } from "react";

class App extends Component {
  state = {
    isOpen: true
  };

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
        <button className="button" onClick={this.HandOpen}>
          Кнопка
        </button>
        {div}
      </div>
    );

    HandOpen = () => {
      console.log("---", "clicked");
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }
}

export default App;
