import React from 'react'

export default function Header() {
    return (
        <div>
            <header style={getStyle}>
                <h1>Todo List</h1>
            </header>
        </div>
    )
}
const getStyle = {
    background: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '5px'
}

