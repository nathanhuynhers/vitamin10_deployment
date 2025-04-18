from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

quotes = [
    "Believe you can and you're halfway there.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Everything you can imagine is real.",
    "You are stronger than you think."
]

@app.route('/api/quote')
def get_quote():
    return jsonify({ "quote": random.choice(quotes) })

if __name__ == '__main__':
    app.run(debug=True)
