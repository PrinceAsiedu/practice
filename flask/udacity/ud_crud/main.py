from flask import Flask
from flask_migate import Migrate
from flask_sqlalchemy import SqlAlchemy
from config import DevelopmentConfig as devconf


app = Flask(__name__)
app.config.from_object(devconf)