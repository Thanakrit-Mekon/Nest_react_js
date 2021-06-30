import React, { useEffect, useState }from 'react';
import './App.css';

// - - - Function component - - - //

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

/*
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

