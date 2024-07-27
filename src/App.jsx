import React from 'react'
import './index.css'
import { Sidebar } from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className="h-screen bg-black">
      <div className='h-[90%] flext'>
        <Sidebar />
      </div>
      <Player />
    </div>
  )
}

export default App