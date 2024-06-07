from flask import Flask, request
from flask_cors import CORS, cross_origin
from src.validate_input import validate_input

app = Flask(__name__)
CORS(app)

already_guessed = []

@app.route("/")
def home():
    return 'Hello world'

@app.route("/", methods=['POST'])
def post():
    bytestring_guess = request.get_data()
    guess = bytestring_guess.decode('UTF-8')
    print(guess)
    response = validate_input(guess, already_guessed)
    already_guessed.append(guess)
   
    if response:
        return {"guess": guess, "already_guessed": already_guessed}