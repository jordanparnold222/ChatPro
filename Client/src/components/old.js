import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      texts: [],
      texts_recieved: [],
      input: "",
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  handleInput = (event) => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = () => {
    const { texts, input } = this.state;
    this.setState({
      texts: [...texts, { text: input, time: new Date() }],
      input: "",
    });
  };

  handleSubmitRecieved = () => {
    const { texts_recieved, input } = this.state;
    this.setState({
      texts_recieved: [...texts_recieved, { text: input, time: new Date() }],
      input: "",
    });
  };
  handleSecondSubmit = () => {
    const { texts_recieved, input } = this.state;
    this.setState({
      texts_recieved: [...texts_recieved, { text: input, time: new Date() }],
      input: "",
    });
    console.log(texts_recieved);
  };

  render() {
    const { texts, texts_recieved } = this.state;
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="navbar-title">My Navbar</h1>
        </div>
        <div className="navbar-right">
          <button className="navbar-button" onClick={this.toggleDropdown}>
            Menu
          </button>
          {this.state.dropdownOpen && (
            <div className="navbar-dropdown">
              {texts.map((text, index) => (
                <div key={index} className="navbar-text">
                  {text.text}
                </div>
              ))}
            </div>
          )}
          {this.state.dropdownOpen && (
            <div className="navbar-input-container">
              <input
                className="navbar-input"
                type="text"
                placeholder="Enter new text"
                value={this.state.input}
                onChange={this.handleInput}
              />
              <button className="navbar-submit" onClick={this.handleSubmit}>
                Submit
              </button>
              <button
                className="navbar-submit"
                onClick={this.handleSecondSubmit}
              >
                Add to texts_recieved
              </button>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
