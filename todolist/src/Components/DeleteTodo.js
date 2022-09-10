import React from 'react'
import axios from 'axios'

export default function DeleteTodo({id, getAllTodos}) {

  const deleteTodo = async (id) => {
    const url = `${process.env.REACT_APP_SERVER}todos/${id}`
    try {
      await axios.delete(url)
      getAllTodos()
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <i style={{color:'rgb(148, 0, 0)'}} id={id} onClick={()=>deleteTodo(id)} className="fa-solid fa-trash"></i>
    </>
  )
}
