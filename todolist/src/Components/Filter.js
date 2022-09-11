import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export default function Filter({ setSearched, allTodos, setTodosLeft }) {
  const [checked, setChecked] = useState({
    all: false,
    active: false,
    done: false
  })
  const [selection, setSelection] = useState('')

  const handleChange = (e) => {
    setSelection(e.target.id)
  }

  // const filter = () => {
  //   let todos
  //   if (selection === 'done') {
  //     todos = allTodos.filter(todo => todo.isComplete === true)
  //     setTodosLeft(allTodos.length - todos.length)
  //     setSearched(todos)
  //   } else if (selection === 'active') {
  //     todos = allTodos.filter(todo => todo.isComplete === false)
  //     setTodosLeft(todos.length)
  //     setSearched(todos)
  //   } else {
  //     todos = allTodos
  //     setSearched(todos)
  //   }
  // }

  useEffect(()=>{
    function filter(){
      let todos
      if (selection === 'done') {
        todos = allTodos.filter(todo => todo.isComplete === true)
        setTodosLeft(allTodos.length - todos.length)
        setSearched(todos)
      } else if (selection === 'active') {
        todos = allTodos.filter(todo => todo.isComplete === false)
        setTodosLeft(todos.length)
        setSearched(todos)
      } else {
        todos = allTodos
        setSearched(todos)
      }
    }
    filter()
  }, [allTodos, selection, setSearched, setTodosLeft])

  return (
    <div style={{ display: 'flex', justifyContent:'space-between' }}>
      <Form onChange={handleChange} style={{ display: 'flex', gap: '1rem', fontSize: '20px', fontFamily: "'Life Savers', cursive" }}>
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
            })
          }} checked={checked.active} type="radio" label="Active" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="done">
          <Form.Check name='filter' onChange={() => {
            setChecked({
              all: false,
              active: false,
              done: !checked.done
            })
          }} checked={checked.done} type="radio" label="Done" />
        </Form.Group>
      </Form>
    </div>
  )
}
