from src.guess_is_correct import guess_is_correct

def test_guess_present_in_word():
    assert guess_is_correct() == True