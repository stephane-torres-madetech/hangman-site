from flask import Flask, request
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return 'Hello world'

@app.route("/", methods=['POST'])
def post():
    bytestring_guess = request.get_data()
    guess = bytestring_guess.decode('UTF-8')
    print(f'{guess}')
   

    return f'Recieved Guess {guess}'