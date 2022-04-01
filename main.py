from flask import redirect, url_for, render_template, request, session, flash
from datetime import timedelta
from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy

ROOT_DIR = os.path.dirname(os.getcwd())
print(ROOT_DIR+r'\templates')
print(ROOT_DIR+r'\static')
app = Flask(
    __name__, 
    template_folder=ROOT_DIR+r'\templates',
    static_folder=ROOT_DIR+r'\static'
)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/{any}')
def general_redirect():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5500)