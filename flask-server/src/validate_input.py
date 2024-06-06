def validate_input(input: str, guessed_letters: list[str]):
    return type(input) == str and input not in guessed_letters and len(input) == 1