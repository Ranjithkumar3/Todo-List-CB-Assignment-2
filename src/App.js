import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  render(){
    return (
      <div className="App">
        <h1>To-do List</h1>
  
        <input type="text" placeholder="Enter the task" />
        <button>Add</button>
      </div>
    );
  }
}

export default App;
