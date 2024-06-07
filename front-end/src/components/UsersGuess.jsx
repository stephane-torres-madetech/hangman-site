function UsersGuess({handleInputChange, submitGuess, guess}) {
  

  return (
    <div className="guess">
      <form action="" method="POST">
        <input
          type="text"
          maxLength={1}
          onSubmit={() => submitGuess()}
          onChange={handleInputChange}
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
