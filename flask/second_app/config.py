# Configuration file 
class Config(object):
    pass

class ProdConfig(object):
    pass

class DevConfig(Config):
    debug = True
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:PGicugr8()()#@localhost:5432/flask_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False