class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    let whereState = [...this.state.messages];
    whereState.push(this.state.input);
    this.setState({
      messages: whereState
    });
    this.state.input = '';
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input onChange={this.handleChange} value={this.state.input}/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map(function(n) {
            return <li>{n}</li>
          })}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};

/*
to-do:
-apparantly I have to clear the 'current input value' even tho it already clears???????
*/