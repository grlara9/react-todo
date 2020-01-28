import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Header() {
    return (
        <div>
            <Jumbotron fluid style={getStyle}> 
                 <Container >
                <h1>Todo List</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
                </Container>
            </Jumbotron>
        </div>
    )
}
const getStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '5px',
    fontSize: '28px'
}

const linkStyle ={
    color: 'white',
    fontSize: '24px',
    textDecoration: 'none',
}

