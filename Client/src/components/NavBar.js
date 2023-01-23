import React, { Component } from "react";
import "./Navbar.css";
<<<<<<< Updated upstream
=======
import SignIn from "./SignIn";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======
    this.dropdownRef = React.createRef();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    this.setState({
      texts: [...texts, { text: input, time: new Date() }],
=======
    const time = new Date();
    const time_string = `Sent ${time.toLocaleDateString()} at ${time.toLocaleTimeString()}`;
    this.setState({
      texts: [...texts, { text: input, time, time_string }],
>>>>>>> Stashed changes
      input: "",
    });
  };

  handleSubmit2 = () => {
    const { texts_recieved, input } = this.state;
<<<<<<< Updated upstream
    this.setState({
      texts_recieved: [...texts_recieved, { text: input, time: new Date() }],
      input: "",
    });
  };

  componentDidUpdate(prevProps, prevState) {
=======
    const time = new Date();
    const time_string = `Received ${time.toLocaleDateString()} at ${time.toLocaleTimeString()}`;
    this.setState({
      texts_recieved: [...texts_recieved, { text: input, time, time_string }],
      input: "",
    });
  };
  componentDidMount() {
    this.dropdownRef = React.createRef();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.chat !== this.state.chat) {
      this.dropdownRef.current.scrollTop =
        this.dropdownRef.current.scrollHeight;
    }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }
  }

=======
      this.dropdownRef.current.scrollTop =
        this.dropdownRef.current.scrollHeight;
    }
  }
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            Chat
          </button>

          {this.state.dropdownOpen && (
            <div className="navbar-dropdown">
=======
            <img
              src={require("./chat.png")}
              alt="image button"
              width="50"
              height="50"
            />
          </button>
          {this.state.dropdownOpen && (
            <div className="navbar-dropdown" ref={this.dropdownRef}>
>>>>>>> Stashed changes
              {chat.map((item, index) => (
                <div
                  key={index}
                  className={`navbar-text ${
                    item.sender === "sent" ? "sent" : "received"
                  }`}
                >
                  {item.text}
<<<<<<< Updated upstream
                </div>
              ))}
              <div></div>
=======
                  <div className="timestamp">
                    {item.sender === "sent" ? "Sent " : "Received "}
                    {new Date(item.time).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    at{" "}
                    {new Date(item.time).toLocaleString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                    })}
                  </div>
                </div>
              ))}
>>>>>>> Stashed changes
            </div>
          )}
        </div>
        {this.state.dropdownOpen && (
          <div className="navbar-input-container">
<<<<<<< Updated upstream
            <input
              className="navbar-input"
              type="text"
              placeholder="Enter new text"
              value={this.state.input}
              onChange={this.handleInput}
            />
            <button className="navbar-submit" onClick={this.handleSubmit}>
              Send
=======
            <textarea
              className="navbar-input"
              placeholder="Enter new text"
              value={this.state.input}
              onChange={this.handleInput}
              rows={1}
              cols={18}
              style={{ resize: "none", overflow: "auto" }}
            />
            <button className="navbar-submit" onClick={this.handleSubmit}>
              <img
                src={require("./send.png")}
                alt="image button"
                width="40"
                height="40"
              />
>>>>>>> Stashed changes
            </button>
          </div>
        )}
      </nav>
    );
  }
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export default NavBar;
