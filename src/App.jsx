import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Loader from './components/Loader';
import Cursor from './components/Cursor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
      <Loader />
      <Cursor />
      <Home />
    </div>
  )
}

export default App
