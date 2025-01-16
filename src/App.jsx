import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [slidenav, setSlidenav] = useState(false)

  const handleSlide = ()=>{
    setSlidenav(!slidenav)
    
  }

  return (
    <>
    <button className='bg-red-600 lg:hidden block' onClick={handleSlide}>Click me</button>
     <div className="outer-container  bg-gray-400 w-[100vw] h-[100vh] flex justify-center items-center">

<div></div>

      <div className="inner-container w-[90vw] h-[90vh] bg-gray-300 ">
        

        <div className="sections grid-cols-1 lg:grid-cols-2 flex gap-2 h-[90vh]">

<div className="left-section w-[30vw]  lg:block bg-green-400 h-[90vh] transition-all ease-in-out duration-150  " style={{left: slidenav ? "5vw" :"-30vw",position:'fixed'}}>
  chutia hu main
</div>

<div className="right-section flex-1 lg:w-[60vw] bg-pink-400 ">
  c
</div>


        </div>
      


      </div>
      
      
     </div>
    </>
  )
}

export default App
