import React from 'react'
import './index.css'
import { Sidebar } from './components/Sidebar'

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flext'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App