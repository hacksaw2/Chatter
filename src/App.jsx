import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './Svgs/Logo'

function App() {
  const [slidenav, setSlidenav] = useState(true)

  const handleSlide = ()=>{
    setSlidenav(!slidenav)
    
  }

  return (
    <>
    
     <div className="outer-container  bg-gray-400 w-[100vw] h-[100vh] ">

<div className="navbar p-1 ">
<ul className='text- font-bold font-serif  flex  '>



  <li className='flex  gap-2 '><Logo/>Chatter</li>
  <button className='bg-red-600 lg:hidden block' onClick={handleSlide}>Click me</button>
</ul>

</div>

<div className='flex justify-center items-center'>

      <div className="inner-container w-[90vw] h-[90vh] bg-gray-300 ">
        

        <div className="sections grid-cols-1 lg:grid-cols-2 flex gap-2 h-[90vh]">

<div className="left-section w-[30vw]  lg:block bg-green-400 h-[90vh] transition-all ease-in-out duration-150 p-1 " style={{left: slidenav ? "5vw" :"-30vw",position:'fixed'}}>

  chutia hu main
</div>

<div className="right-section flex-1 lg:w-[60vw] bg-pink-400 ">
  c
</div>


        </div>
      


      </div>
      
      </div>
     </div>
    </>
  )
}

export default App
