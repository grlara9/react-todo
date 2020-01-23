import React, { Component } from 'react'
import propTypes from "prop-types"

export class TodoItem extends Component {

    getStyle = () => {
        return {

            background: 'f4f4f4',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                <p>{ title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>  X </button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes ={
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff'
    
}
export default TodoItem
