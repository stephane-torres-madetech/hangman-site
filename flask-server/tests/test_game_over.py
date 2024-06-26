from src.game_over import game_over

def test_game_over_too_many_guesses():
    assert game_over(6, 'word', ['l', 'r', 's', 'x', 'w', 'b']) == True

def test_game_not_over_fewer_than_max_guesses():
    assert game_over(5, 'word', ['l', 'r', 's', 'x', 'w']) == False

def test_game_over_guessed_the_correct_word():
    assert game_over(5, 'word', ['w', 'o', 'r', 'd']) == True