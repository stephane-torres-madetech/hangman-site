from src.validate_input import validate_input

def test_int_is_not_valid():
    assert validate_input(12) == False

def test_one_letter_is_valid_input():
    assert validate_input('e') == True