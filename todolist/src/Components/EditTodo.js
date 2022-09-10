import React from 'react'

export default function EditTodo({ setIsDisabled, isDisabled}) {

  const click = () => {
    setIsDisabled(!isDisabled)
  }

  return (
    <>
      <i style={{color:'rgb(0, 153, 255)'}} onClick={click} className="fa-solid fa-pencil"></i>
    </>
  )
}
