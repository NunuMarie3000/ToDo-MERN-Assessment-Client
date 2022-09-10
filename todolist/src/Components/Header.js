import React from 'react'

export default function Header() {
  return (
    <>
      <h1 style={{ textAlign: 'center', fontFamily: "'Life Savers', cursive" }}>ToDo <i className="fa-solid fa-list-check"></i></h1><br />
      <h2 style={{ textAlign: 'center', marginTop: '-1.5rem', fontSize: '2rem', opacity: '0.8', fontFamily: "'Life Savers', cursive" }}>by Stormy</h2>
      <h5 style={{ textAlign: 'center', opacity: '0.4', fontSize: '18px' }}>A MERN (MongoDB + Express.js + React.js + Node.js) Stack Todo-List App</h5><br/>
    </>
  )
}
