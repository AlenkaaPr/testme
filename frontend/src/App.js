import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] }
  }

  componentDidMount() {
    fetch('api/items').then(response => {
      if (response.status !== 200) {
        return Promise.reject(response);
      } else {
        return Promise.resolve(response.json());
      }
    }).then(
      list => this.setState({ list }),
      e => console.error(e)
    );
  }

  createList() {
    if (this.state.list) {
      let i = 0;
      return this.state.list.map(el => <li key={i++}>{el}</li>)
    } else {
      return <h4>Error!</h4>
    }
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TestMe todo-list</h1>
        </header>
        <div className="App-intro">
          <ol>
            {this.createList()}
          </ol>
        </div>
      </div>
    );
  }
}

export default App;
