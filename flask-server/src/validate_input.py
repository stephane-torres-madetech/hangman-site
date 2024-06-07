def validate_input(input: str, guessed_letters: list[str]) -> bool: 
    return type(input) == str and input not in guessed_letters and len(input) == 1

# this needs changing as the type will be string, coming from an input also needs to reject numerical values.