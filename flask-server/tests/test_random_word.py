from src.get_random_word import get_random_word

def test_call_random_word_api():
    assert type(get_random_word(5)) == list

def test_word_length_is_equal_to_five():
    assert len(get_random_word(5)[0]) == 5

def test_word_is_type_string():
    assert type(get_random_word(6)[0]) == str
    assert len(get_random_word(6)[0]) == 6

def test_only_one_word_is_returned():
    assert len(get_random_word(5)) == 1 