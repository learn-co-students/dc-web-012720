import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn("App constructor")
  }

  componentDidMount(){
    console.warn("App componentDidMount")
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(data => {
      this.setState({taskList: data})
    })
  }

  componentDidUpdate(){
    console.warn("App componentDidUpdate")
  }

  //when input changes
  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  //when form is submitted
  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/tasks', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        text: this.state.formText
      })
    }).then(res => res.json())
    .then(newTask => {
      console.log(newTask)
      this.setState({
        taskList: [ ...this.state.taskList, newTask ]
      })
    })
  }

  //when I delete a task, my state of taskList should change
  //such that, taskList is an array, but what the clicked task removed
  onRemoveTask = (deletedId) => {
    console.log("attempting to remove task", deletedId)
    //make a DELETE fetch
    fetch(`http://localhost:3000/tasks/${deletedId}`, {
      method: "DELETE"
    }).then(res => res.json())
    .then(data => {
      let newList = this.state.taskList.filter(task => task.id != deletedId)
      console.log(newList)
      //update the state of taskList to be a new array
      //i still have all my old tasks except the task of id ?
      this.setState({ taskList: newList })
    })
  }

  render() {
    console.warn("App render")
    return (
      <div className="App">
        <Form
          onChange={this.onTypingChange} onSubmit={this.onAddNewTask}
        />
        <TaskList
          tasks={this.state.taskList}
          onRemoveTask={this.onRemoveTask}
        />
      </div>
    );
  }
}

export default App;
