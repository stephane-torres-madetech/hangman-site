import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersGuess from './components/UsersGuess'
import Hangman from './components/hangman'
import axios from 'axios'


// server running on local host 5000
function App() {
  const [guess, setGuess] = useState("");

  async function submitGuess() {
    await axios
      .post("http://localhost:5000", guess)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setGuess((guess) => "");
  }

  function handleInputChange(e){
    setGuess(e.target.value)

  }
  return (
    <div className="w-full">
     
       <UsersGuess handleInputChange={handleInputChange} guess={guess} submitGuess={submitGuess}/>      
      <Hangman/>
    </div>
  )
}

export default App
