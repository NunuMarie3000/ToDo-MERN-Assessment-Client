import React from 'react'
import Header from './Components/Header'
import RenderTodos from './Components/RenderTodos'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <div className='app-container'>
        <Header />
        <RenderTodos />
        <Footer/>
      </div>
    </>
  )
}

