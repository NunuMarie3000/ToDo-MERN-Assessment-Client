import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export default function AddTodo({getAllTodos}) {
  const [newTodo, setNewTodo] = useState('')

  const addTodo = async (e) => {
    e.preventDefault()
    // const url = 'http://localhost:3001/todos'
    const url = `${process.env.REACT_APP_SERVER}todos`
    const todo = {"todo": newTodo, "isComplete":false}
    console.log(todo)
    try {
      await axios.post(url, todo)
      getAllTodos()
    } catch (error) {
      console.log(error.message)
    }
    e.target[0].value = ''
  }

  const handleChange = (e) => {
    setNewTodo(e.target.value)
  }

  return (
    <>
      <Form onSubmit={addTodo} style={{display:'flex', marginBottom:'2rem'}}>
        <Form.Control style={{borderRadius:'1%/5%'}} type="text" placeholder="Add New Todo..." onChange={handleChange} />
      </Form>
    </>
  )
}
