import React, { Component } from "react";
import "./Navbar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      texts: [],
      texts_recieved: [],
      chat: [],
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

  handleSubmit2 = () => {
    const { texts_recieved, input } = this.state;
    this.setState({
      texts_recieved: [...texts_recieved, { text: input, time: new Date() }],
      input: "",
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.texts !== this.state.texts ||
      prevState.texts_recieved !== this.state.texts_recieved
    ) {
      const { texts, texts_recieved } = this.state;
      const chat = texts
        .map((text) => ({ ...text, sender: "sent" }))
        .concat(
          texts_recieved.map((text) => ({ ...text, sender: "received" }))
        );
      chat.sort((a, b) => new Date(a.time) - new Date(b.time));
      this.setState({ chat });
    }
  }

  render() {
    const { chat } = this.state;
    return (
      <nav className="navbar">
        <button className="navbar-submit" onClick={this.handleSubmit2}>
          Recieve
        </button>
        <div className="navbar-left">
          <h1 className="navbar-title">My Navbar</h1>
        </div>
        <div className="navbar-right">
          <button className="navbar-button" onClick={this.toggleDropdown}>
            Chat
          </button>

          {this.state.dropdownOpen && (
            <div className="navbar-dropdown">
              {chat.map((item, index) => (
                <div
                  key={index}
                  className={`navbar-text ${
                    item.sender === "sent" ? "sent" : "received"
                  }`}
                >
                  {item.text}
                </div>
              ))}
              <div></div>
            </div>
          )}
        </div>
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
              Send
            </button>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
