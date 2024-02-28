import { useState } from 'react'
import './App.css'

function App(e) {
  const [show,setShow] = useState(false)
  const [clr,setClr] = useState("white")
  function handleClick(){
    setClr("black")
    if(e.target.className === 'container'){
      setShow(false)
      setClr("white")
    }
  }
  return (
    <section
      onClick={handleClick}
      className='container'
      style={{backgroundColor: clr}}
    >
      {show ? (
        <input type="text" placeholder='search' />
      ) : <p onClick={() => setShow(true)}>O</p>}
    </section>
  )
}

export default App
