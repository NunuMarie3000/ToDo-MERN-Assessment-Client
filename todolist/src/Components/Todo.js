import React, { useState, useEffect } from 'react'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export default function Todo({ id, todo, getAllTodos, todosLeft, setTodosLeft }) {
  const [isComplete, setIsComplete] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const [updatedTodo, setUpdatedTodo] = useState('')

  const crossOut = () => {
    setIsComplete(!isComplete)
  }

  const updateTodo = (e) => {
    setUpdatedTodo(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const url = `http://localhost:3001/todos/${id}`
    const url = `${process.env.REACT_APP_SERVER}todos/${id}`
    const request = { "todo": updatedTodo, "isComplete":isComplete }
    try {
      await axios.put(url, request)
      getAllTodos()
    } catch (error) {
      console.log(error.message)
    }
    setIsDisabled(true)
  }

  useEffect(()=>{
    !isComplete ? setTodosLeft(todosLeft + 1) : setTodosLeft(todosLeft - 1)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div className='todo'>
        <Form onSubmit={handleSubmit} onClick={crossOut} key={id} style={{ display: 'flex', alignItems:'center', gap:'1rem' }}>
          <i style={{ fontSize: '10px' }} className="fa-solid fa-circle"></i>
          <Form.Control className={isComplete ? 'checked' : undefined} disabled={isDisabled} defaultValue={todo} type="text" onChange={updateTodo} />
        </Form>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <EditTodo updatedTodo={updatedTodo} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <DeleteTodo getAllTodos={getAllTodos} todo={todo} id={id} />&nbsp;
        </div>
      </div>
    </>
  )
}
