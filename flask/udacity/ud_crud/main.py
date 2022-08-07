from flask import Flask, render_template
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from config import DevelopmentConfig as devconf


app = Flask(__name__)
app.config.from_object(devconf)
db = SQLAlchemy(app)


class Todo(db.Model):
    __tablename__ = 'todos'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    # title = db.Column(db.String(80), nullable=False)
    description = db.Column(db.Text, nullable=False)
    # completed = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Todo {self.id} {self.description}>' 


migrate = Migrate(app, db)

@app.route('/')
def index():
    return render_template('index.html', data=Todo.query.all())