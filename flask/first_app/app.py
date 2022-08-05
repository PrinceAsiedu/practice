from flask import Flask, request, redirect, abort, render_template
from flask.
from markupsafe import escape

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Hello World!</h1>'

@app.route('/<user>/password/<password>')
def name(user):
    return f'<h1>Hello, {escape(user)}!</h1>'

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        return '<h1>Login</h1>'
    else:
        return '<h1>Login</h1><button type="submit">Login</button>'

if __name__ == '__main__':
    app.run(debug=False)