from flask import Flask,render_template_string,render_template,url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template_string('<h1>SIH App Server Hello</h1><br/><ul><li><h2>URL:/games/1</h2></li><li><h2>URL:/games/2</h2></li></ul>')

@app.route('/games/<int:id>')
def game(id):
    if id==1 : 
        return render_template('Game.html')
    
    elif id==2 :
        return render_template('Game2.html')
    else:
        render_template_string("<h2>Error 404 Not Found:No Game at id"+str(id)+"</h2>") 

if __name__ == "__main__":
        app.run()