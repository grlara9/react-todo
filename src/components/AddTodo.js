import React, { Component } from 'react'
import propTypes from "prop-types"
import {FormCheck, Form, Col, Button} from 'react-bootstrap'
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
           <form onSubmit={this.onSubmit}  style={{display:'flex', marginBottom: '10px'}} style={getStyle}>
               <Form.Row  style={moveForm}>
                    <Col>
               <Form.Control 
               
               type="text" 
               name="title" 
               placeholder="Add todo"
               style={{flex: '1'}}
               value={this.state.title}
               onChange={this.onChange}
               />
               </Col>
               <Col>
               <Button type="submit"
               variant="dark"
               size="lg"
               value="submit"
               className="btn"
               style={{flex: '1'}}
               >Add Todo </Button>
               </Col>
               </Form.Row>
           </form>
        )
    }
}
// PropTypes
AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
  }
  const getStyle ={
      textAlign: 'center',
      
  }
  const moveForm ={
      marginLeft: '20px',
      
  }
export default AddTodo

