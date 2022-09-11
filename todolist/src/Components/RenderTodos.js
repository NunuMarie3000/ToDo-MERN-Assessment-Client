import React, { useState, useEffect, useCallback } from 'react'
import Todo from './Todo'
import axios from 'axios'
import AddTodo from './AddTodo'
import Filter from './Filter'

export default function RenderTodos() {
  const [allTodos, setAllTodos] = useState('')
  const [searchedTodos, setSearched] = useState('')
  let [todosLeft, setTodosLeft] = useState(0)

  const getAllTodos = async () => {
    const url = `${process.env.REACT_APP_SERVER}todos`
    try {
      const response = await axios.get(url)
      setSearched(response.data)
      setAllTodos(response.data)
      setTodosLeft(howmany(response.data))
    } catch (error) {
      console.log(error.message)
    }
  }

  const howmany = (allTodos) => {
    let notComplete = allTodos.filter(todo => todo.isComplete === false)
    return notComplete.length
  }

  useEffect(() => {
    getAllTodos()
    // eslint-disable-next-line
  }, [])

  useCallback(setTodosLeft, [setTodosLeft])

  return (
    <>
      <div className='render-container'>
        <AddTodo getAllTodos={getAllTodos} />

        {searchedTodos !== '' && <h3 style={{fontFamily:"'Life Savers', cursive", paddingBottom:'1rem'}}>{todosLeft} todos left</h3>}
        <Filter todosLeft={todosLeft} setTodosLeft={setTodosLeft} allTodos={allTodos} setSearched={setSearched} searchedTodos={searchedTodos} />

        <div>
          {searchedTodos !== '' && searchedTodos.map(todo =>
            <Todo key={todo._id} isCompleteOG={todo.isComplete} getAllTodos={getAllTodos} id={todo._id} todo={todo.todo} />)}
        </div>
      </div>
    </>
  )
}
