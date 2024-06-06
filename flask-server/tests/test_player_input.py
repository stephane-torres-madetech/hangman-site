from src.validate_input import validate_input

def test_int_is_not_valid():
    assert validate_input(12) == False