MAX_INCORRECT_GUESSES = 6

def game_over(number_of_guesses: int, guessed_letters: list[str], target_word):
    if number_of_guesses == MAX_INCORRECT_GUESSES:
        return True
    if set(target_word) <= set(guessed_letters):
        return True
    return False