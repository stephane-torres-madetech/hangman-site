import { useState } from "react";
import "./App.css";
import UsersGuess from "./components/UsersGuess";
import Hangman from "./components/hangman";
import axios from "axios";

// server running on local host 5000
function App() {
  const [guess, setGuess] = useState("");
  const [alreadyGuessed, setAlreadyGuessed] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0)

  function hasBeenGuessed(guess, alreadyGuessed) {
    if(alreadyGuessed.length > 0){
      return alreadyGuessed.some((element) => element == guess);
    }
    
  }

  async function submitGuess() {
    if (hasBeenGuessed(guess, alreadyGuessed)) {
      alert("You've already guessed that letter, please guess another");
      setGuess('')
    } else if(guess == ''){
      alert("You have\'t picked a letter, please pick one")
    } else{
      await axios
        .post("http://localhost:5000", guess)
        .then((response) => {
          console.log(response.data);
          setAlreadyGuessed(response.data.already_guessed);
          setWrongGuesses(response.data.number_of_wrong_guesses)
        })
        .catch((error) => {
          console.log(error);
        });

      setGuess((guess) => "");
    }
  }

  function handleInputChange(e) {
    setGuess(e.target.value);
  }

  return (
    <div className="w-full">
      <UsersGuess
        handleInputChange={handleInputChange}
        guess={guess}
        submitGuess={submitGuess}
      />
      <Hangman wrongGuesses={wrongGuesses}/>
    </div>
  );
}

export default App;
