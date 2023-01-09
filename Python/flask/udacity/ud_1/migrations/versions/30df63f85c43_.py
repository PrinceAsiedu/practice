"""empty message

Revision ID: 30df63f85c43
Revises: 7b16f114c402
Create Date: 2022-08-04 17:07:50.273283

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '30df63f85c43'
down_revision = '7b16f114c402'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('todos', sa.Column('completed', sa.Boolean(), nullable=False))

    # To handle existing data, we need to set the completed column to False for all existing todos.
    # the op.add_column() should look like this: 
    # op.add_column('todos', sa.Column('completed', sa.Boolean(), nullable=True)) # then do the following:
    # op.execute("UPDATE todos SET completed = False where completed IS NULL")
    # op.alter_column('todos', 'completed', nullable=False) 
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('todos', 'completed')
    # ### end Alembic commands ###