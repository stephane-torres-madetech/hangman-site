import axios from "axios"
import { useState } from "react";


function UsersGuess(){

    const [guess, setGuess] = useState('')

    async function submitGuess(){
        await axios.post('http://localhost:5000', guess)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="guess">
            <input type="text" maxLength={1} onSubmit={() => submitGuess()} onChange={(e) => {
                setGuess((guess) => e.target.value)
                console.log(guess);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter"){
                    submitGuess()
                }
            }}
            name="guess"/>
        </div>
    )
}



export default UsersGuess