import sqlite3
from sqlite3 import Error
from flask import request, abort
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import (LoginManager, login_manager, login_user, logout_user, login_required, UserMixin)




def create_connection(db_file):

    conn = None
    
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    
    except Error as e:
        print(e)
    
    finally:
        if conn:
            conn.close()



if __name__ == '__main__':
    create_connection(r"./user.db")


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user.db'
app.config['SECRET_KEY'] = 'secretkey'
db =  SQLAlchemy(app)


class user(db.Model):
    name = db.Column(db.String(100), primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.user



@app.route('/user/signin', methods = ['POST'])
def user_signin():
    if(request.method=='POST'):
        req = request.get_json()
        name = req['name']
        email = req['email']
        password = req['password']
        check_user = user.query.filter_by(email=email).first()

        if(check_user is not None):
            if(check_user.password == password):
                login_user(check_user)
                return "Successfully logged in"

            else:
                return "Incorrect Password"  

        else:
            return "User does not exist."



@app.route('/user/signup', methods = ['POST'])
def user_signup():
    if(request.method=='POST'):
        req = request.get_json()
        name = req['name']
        email = req['email']
        password = req['password']

        if user.query.filter_by(email = email).first() is not None:
            abort(401)
        

        u = user(name = name,email=email,password=password)

        try:
            db.session.add(u)
            db.session.commit()
            return "User registered successfully."

        except:
            return 'Issue in registeration.'    



# user_signin()