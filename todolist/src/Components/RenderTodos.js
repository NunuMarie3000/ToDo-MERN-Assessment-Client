import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import axios from 'axios'
import AddTodo from './AddTodo'

export default function RenderTodos() {
  const [allTodos, setAllTodos] = useState('')
  const [todosLeft, setTodosLeft] = useState(0)

  const getAllTodos = async () => {
    // const url = 'http://localhost:3001/todos'
    const url = `${process.env.REACT_APP_SERVER}todos`
    try {
      const response = await axios.get(url)
      setAllTodos(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getAllTodos()
  }, [])

  return (
    <>
      <div className='render-container'>
        <AddTodo getAllTodos={getAllTodos} />
        {/*todos left */}
        {console.log(todosLeft)}
        <div>{allTodos !== '' && allTodos.map(todo =>
          <Todo todosLeft={todosLeft} setTodosLeft={setTodosLeft} getAllTodos={getAllTodos} id={todo._id} todo={todo.todo} />)}
        </div>
      </div>
    </>
  )
}
