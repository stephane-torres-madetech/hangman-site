from ..get_random_word import get_random_word

def test_call_random_word_api():
    assert type(get_random_word()) == list 