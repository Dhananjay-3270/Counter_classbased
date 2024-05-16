import  { Component } from 'react';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  handleDecrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <div>

        <h4>Count: {this.state.count}</h4>
         
        
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterApp;
