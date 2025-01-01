import React from 'react'
import './App.css'

function Text ({display}) {
  return(
    <div>
      <p>{display}</p>
    </div>
  )
}

function App() {


  return (
    <>
    <Text display="Hello Madam"/>
    </>
  )
}

export default App
