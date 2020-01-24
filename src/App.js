import React, { Component } from 'react';
import Header from "./components/layout/Header"
import Todos from "./components/Todos"
import './App.css';

class App extends Component {
  state={
      todos:[
          {
              id: 1,
              title: 'take out trash',
              completed: true
          },
          {
            id: 2,
            title: 'take out trash',
            completed: false
        },
        {
            id: 3,
            title: 'take out trash',
            completed: false
        },
      ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  render(){
      console.log(this.state.todos)
      return (
          <div >
            <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>
          </div>
      )
  }
}

export default App;
