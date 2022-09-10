import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Filter({ setSearched, allTodos, setTodosLeft }) {
  const [checked, setChecked] = useState({
    all: false,
    active: false,
    done: false
  })

  const handleChange = (e) => {
    const selection = e.target.id
    let todos
    if (selection === 'done') {
      todos = allTodos.filter(todo => todo.isComplete === true)
      setSearched(todos)
      setTodosLeft(allTodos.length - todos.length)
    } else if (selection === 'active') {
      todos = allTodos.filter(todo => todo.isComplete === false)
      setSearched(todos)
      setTodosLeft(todos.length)
    } else {
      todos = allTodos
      setSearched(todos)
    }
  }
  return (
    <>
      <Form onChange={handleChange} style={{ display: 'flex', gap:'1rem', fontSize:'20px', fontFamily: "'Life Savers', cursive" }}>
        <Form.Group className="mb-3" controlId="all">
          <Form.Check name='filter' onChange={() => {
            setChecked({
              all: !checked.all,
              active: false,
              done: false
            })
          }} checked={checked.all} type="radio" label="All" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="active">
          <Form.Check name='filter' onChange={() => { 
            setChecked({
              all: false,
              active: !checked.active,
              done: false
            }) }} checked={checked.active} type="radio" label="Active" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="done">
          <Form.Check name='filter' onChange={() => { 
            setChecked({
              all: false,
              active: false,
              done: !checked.done
            })}} checked={checked.done} type="radio" label="Done" />
        </Form.Group>
      </Form>
    </>
  )
}
