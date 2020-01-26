import React, { Component } from 'react'

export class AddTodo extends Component {
state={
    title: ''
}

onSubmit =(e) =>{
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({title:''});
}
//setting the title with whatever we type in e.target.value;
onChange =(e) => this.setState({title: e.target.value});

    render() {
        return (
           <form onSubmit={this.onSubmit} style={{display:'flex'}}>
               <input 
               type="text" 
               name="title" 
               placeholder="Add todo"
               style={{flex: '1'}}
               value={this.state.title}
               onChange={this.onChange}
               />
               <input type="submit"
               value="submit"
               className="btn"
               style={{flex: '1'}}
               />
           </form>
        )
    }
}

export default AddTodo

