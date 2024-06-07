from src.guess_is_correct import guess_is_correct

def test_guess_present_in_word():
    assert guess_is_correct('d', 'word') == True

def test_guess_is_not_present_in_word():
    assert guess_is_correct('a', 'word') == False