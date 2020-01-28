import React, { Component } from 'react'
import { FormCheck, Button, Col, Form } from 'react-bootstrap'

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
            <Form.Row>
                <Col>
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> 
                </div>
            </Col>
            <Col>
                <p>{ title }
                </p>
            </Col>
            <Col>
                <Button variant="danger" onClick={this.props.delTodo.bind(this, id)}  style={getStyle}>  Delete </Button>
             </Col>
            
            </Form.Row>
        )
    }
}
const getStyle ={
    marginLeft: '10px'
}

TodoItem.propTypes ={
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired,
}


export default TodoItem
