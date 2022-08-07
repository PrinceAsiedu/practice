class Config(object):
    pass


class ProductionConfig(Config):
    pass


class DevelopmentConfig(Config):
    debug = True
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:PGicugr8()()#@localhost:5432/todo_app_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False