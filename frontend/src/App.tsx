import React, { useEffect, useState }from 'react';
import './App.css';

// - - - Function component demo - - - //

type AppProps = {
  message?: string; // add ? it mean ok if nothing has passed to message
};
type AppState = {
  counter: number;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0,
  };
  
  render() {
    const incCounter = () => {
      this.setState({counter: this.state.counter+1});
    }
    return (
      <div>
        {this.props.message ? this.props.message : "None"}
        <br />
          Counter = {this.state.counter}
        <br />
        <button onClick={incCounter}>Increment</button>
      </div>
    );
  }
}
export default App;

// - - - Class component demo - - - //
/*
type AppProps = {
  message?: string; // add ? it mean ok if nothing has passed to message
};
type AppState = {
  counter: number;
};
class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    counter: 0,
  };

  render() {
    // if nothing pass to message(prop) it will be "None" as below
    return (
      <div>
        {this.props.message ? this.props.message : "None"}
        <br />
          Counter = {this.state.counter}
        <br />
        <button onClick={() => {this.setState({counter: this.state.counter+1});}}>Increment</button>
      </div>
    );
  }
}

export default App;
*/

// - - - Function component - - - //
/*
const App = () => {
  const [message, setMessage] = useState("test"); // use hook(useState)
  // useEffect instead componenntDidMount()
  useEffect(() => {
    fetch("http://localhost:3000/example")
      .then(res => res.json())
      .then(obj => {
        setMessage(obj.message);
      });
  }, []);
  return (
    <div>
      {message}
    </div> 
  );
}

export default App;

// - - - Class component - - - //


type AppState = {
  message: string;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    message: "default message",
  };
  // State and lifecycle 
  componentDidMount() {
    // fetch from backend 
    // returned promise 
    fetch("http://localhost:3000/example")
      .then(res => res.json())
      .then(obj => {
        this.setState({message: obj.message})
      });
  }

  render() {
    return (
      <div>
        {this.state.message} 
      </div>
    );
  }
}
*/

