// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => ({
      input: '',
      props: message
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

/*
things to try:
-1 X
submitNewMessage() as parameter on submitMessage()
-2 X
submitNewMessage(this.props) under submitMessage()
-3 X
submitMessage(this.props)
-4 X
this.props.submitNewMessage() under submitMessage()
-5 X
mapDispatchToProps(this.props)
-6 X
messages: this.props.messages inside submitMessage() state
-7 X
this.props.submitNewMessage under submitMessage()
-8 X
input: this.props inside submitMessage() state
-9 X
input: props inside submitMessage() state
-10 X
remove messages from handleChange(event)
-11 X
event as param, input: event.target.value
-12 X
props as param inside this.setState
-13 X
this.props as param inside this.setState
-14 X
props as param, props as param for this.setState
-15 X
props as param, input: props
-16 X
props as param, input: this.props
-17 X
input: this.state.input
-18 X
input: this.props.input
-19 X
input: this.props.messages
-20 X
mapDispatchToProps(props) under submitMessage()
-21 X
input: mapDispatchToProps(this.props)
-22
input: mapDispatchToProps(props)
-23
mapDispatchToProps() under submitMessage()
-24 X
message as param
-25 X
message as parm, state as param in setState
*/