import os
from flask import Flask, render_template, send_file


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/resume')
def resume():
    return send_file('static/pdf/resume.pdf')


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))