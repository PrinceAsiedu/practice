from flask import Flask
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

@app.route('/<user>/password/<password>')
def name(user, password):
    return f'<h1>Hello, {escape(user)}!</h1>'

if __name__ == '__main__':
    app.run(debug=False)