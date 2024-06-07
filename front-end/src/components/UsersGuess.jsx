import axios from "axios";
import { useState } from "react";

function UsersGuess() {
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

  return (
    <div className="guess">
      <form action="" method="POST">
        <input
          type="text"
          maxLength={1}
          onSubmit={() => submitGuess()}
          onChange={e => setGuess(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submitGuess();
            }
          }}
          name="guess"
          value={guess}
        />
        <input
          type="submit"
          onSubmit={(e) => {
            submitGuess();
            e.preventDefault();
          }}
          onClick={(e) => {
            submitGuess();
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
}

export default UsersGuess;
