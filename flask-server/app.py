from flask import Flask, request
from flask_cors import CORS, cross_origin
from src.validate_input import validate_input

app = Flask(__name__)
CORS(app)

already_guessed = []
number_of_wrong_guesses_made = 0

@app.route("/")
# game init here?
def home():
    return 'Hello world'

@app.route("/", methods=['POST'])
# game loop here?
def post():
    bytestring_guess = request.get_data()
    guess = bytestring_guess.decode('UTF-8')
 
    response = validate_input(guess, already_guessed)
    already_guessed.append(guess)
   
    if response:
        return {"guess": guess, "already_guessed": already_guessed, "number_of_gueseses": number_of_wrong_guesses_made}