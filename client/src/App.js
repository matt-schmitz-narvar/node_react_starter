import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      server: ''
    }
  }

  componentDidMount(){
    fetch('hello')
    .then((res) => res.json()) // Transform the data into json
    .then(data => {
      this.setState({server: data});
    })
  }

  render() {
    let {server} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React with {server}!</h2>
        </div>
      </div>
    );
  }
}

export default App;
