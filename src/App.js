import React from 'react';
import ShowTask from './components/showtasks';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        newTask: "",
        tasks: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  handleChange(key, value){
    this.setState({
      [key]: value
    });
  }

  addTask(event){
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };
    const tasks = [...this.state.tasks];
    tasks.push(newTask);

    this.setState({
      tasks,
      newTask: ""
    });
  }

  onDeleteTask(id){
    const tasks = [...this.state.tasks];
    const updatedTasks =  tasks.filter(task => task.id !== id);

    this.setState({ tasks: updatedTasks });
  }

  render(){
    return (
      <div>
        <h1>To-do List</h1>
        <input 
        type="text" 
        placeholder="Enter the task" 
        value={this.state.value} 
        onChange={this.handleChange} 
        />
        <button onClick={() => this.addTask()}>Add</button>
        <ShowTask tasks={this.state.tasks} onDeleteTask={this.onDeleteTask}/>
      </div>
    );
  }
}

export default App;
