def validate_input(input: str, guessed_letters: list[str]) -> bool: 
    return type(input) == str and input not in guessed_letters and len(input) == 1