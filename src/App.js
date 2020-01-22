import React, { Component } from 'react';
import Todos from "./components/Todos"
import './App.css';

class App extends Component {
  state={
      todos:[
          {
              id: 1,
              title: 'take out trash',
              completed: false
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
  render(){
      console.log(this.state.todos)
      return (
          <div >
        <Todos todos={this.state.todos}/>
          </div>
      )
  }
}

export default App;
