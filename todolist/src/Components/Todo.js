import React, { useState, useEffect } from 'react'
import DeleteTodo from './DeleteTodo'
import EditTodo from './EditTodo'
import { Form } from 'react-bootstrap'
import axios from 'axios'

export default function Todo({ id, todo, getAllTodos, isCompleteOG }) {
  const [isComplete, setIsComplete] = useState(isCompleteOG)
  const [isDisabled, setIsDisabled] = useState(true)
  const [updatedTodo, setUpdatedTodo] = useState('')

  const crossOut = async () => {
    setIsComplete(!isComplete)
  }

  const updateTodo = (e) => {
    setUpdatedTodo(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const url = `${process.env.REACT_APP_SERVER}todos/${id}`
    const request = { "todo": updatedTodo, "isComplete": isComplete }
    try {
      await axios.put(url, request)
      getAllTodos()
    } catch (error) {
      console.log(error.message)
    }
    setIsDisabled(true)
  }

  const isCompleteUpdate = async() => {
    const url = `${process.env.REACT_APP_SERVER}todos/${id}`
    const request = { "todo": todo, "isComplete": isComplete }
    try {
      await axios.put(url, request)
      getAllTodos()
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect( ()=>{
    isCompleteUpdate()
    // eslint-disable-next-line
  }, [isComplete])

  return (
    <>
      <div className='todo'>
        <Form onSubmit={handleSubmit} onClick={crossOut} style={{ display: 'flex', alignItems:'center', gap:'1rem' }}>
          <i style={{ fontSize: '10px' }} className="fa-solid fa-circle"></i>
          <Form.Control className={isComplete ? 'checked' : undefined} disabled={isDisabled} defaultValue={todo} type="text" onChange={updateTodo} />
        </Form>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <EditTodo updatedTodo={updatedTodo} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
          <DeleteTodo getAllTodos={getAllTodos} id={id} />&nbsp;
        </div>
      </div>
    </>
  )
}
