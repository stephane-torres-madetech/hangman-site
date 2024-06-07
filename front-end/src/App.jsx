import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersGuess from './components/UsersGuess'
import Hangman from './components/hangman'


// server running on local host 5000
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full">
     
       <UsersGuess/>
       
    
      
      <Hangman/>
    </div>
  )
}

export default App
