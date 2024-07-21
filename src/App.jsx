import { useRef, useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Loader from './components/Loader';
import Cursor from './components/Cursor';

function App() {

  

  return (
    <div className='min-h-screen'>
      <Loader />
      <Cursor />
      <Home />
    </div>
  )
}

export default App
