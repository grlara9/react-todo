import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
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

  AddTodo =(title) =>{
    const newTodo ={
      id:4,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render(){
      console.log(this.state.todos)
      return (
        <Router>

          <div >
            <Header />
            <AddTodo AddTodo={this.AddTodo}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete}
        delTodo={this.delTodo}/>
          </div>
        </Router>
      )
  }
}

export default App;
