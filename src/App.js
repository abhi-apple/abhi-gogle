import React, { useState } from 'react'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Routers } from './components/Routers'

const App =()=> {
  const [darktheme, setdarktheme] = useState(false)
  return (
    <div className= { darktheme?'dark':''}>
        <div className="bg-gradient-to-r from-green-400 to-blue-100 dark:bg-conic-to-tl dark:from-orange-900  dark:to-indigo-900 dark:bg-gray-800 dark:text-gray-100 min-h-screen">
          <Navbar darktheme={darktheme}  setdarktheme={setdarktheme}/>
          <Routers/>
          <Footer/>
        </div>
    </div>
  )
}

export default App