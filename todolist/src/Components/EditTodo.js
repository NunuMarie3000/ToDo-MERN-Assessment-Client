import React from 'react'

export default function EditTodo({ updatedTodo, setIsDisabled, isDisabled}) {

  const click = () => {
    setIsDisabled(!isDisabled)
    if(isDisabled && updatedTodo !== ''){
      console.log(true, updatedTodo)
    }
  }

  

  return (
    <>
      <i style={{color:'rgb(0, 153, 255)'}} onClick={click} className="fa-solid fa-pencil"></i>
    </>
  )
}
