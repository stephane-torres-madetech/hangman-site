from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return 'Hello world'

@app.route("/", method=['POST'])
def post():
    pass