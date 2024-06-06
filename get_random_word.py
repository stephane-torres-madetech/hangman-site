import json
import urllib.request

def get_random_word(length):
    url = f'https://random-word-api.herokuapp.com/word?length={length}'

    try:
        response = urllib.request.urlopen(url)
        response_body = response.read()
        return json.loads(response_body)
    except Exception as e:
        print(f'There was an error, it was {e}')
    