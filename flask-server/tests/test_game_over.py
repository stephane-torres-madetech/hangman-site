from src.game_over import game_over

def test_game_over_too_many_guesses():
    assert game_over(6) == True

def test_game_not_over_fewer_than_max_guesses():
    assert game_over(5) == False