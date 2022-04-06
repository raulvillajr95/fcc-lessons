class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility = (setState) => {
    if (this.state.visibility == false) {
      this.setState({
      visibility: true
      })
    } else {
      this.setState({
      visibility: false
      })
    }
  };
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

/*
Everything passes EXCEPT, it wants an anonymous function???????
WTF????????????????????????????????????????????????????????????
*/