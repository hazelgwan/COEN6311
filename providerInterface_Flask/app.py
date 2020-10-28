from flask import Flask, redirect, url_for, render_template, request
# To start server : 
# First: C:\Users\OS\COEN6311\car-rental-all-class
# Then: ./mvnw spring-boot:run
import requests, uuid, json

app = Flask(__name__)

    # Cars data structure:
    # Integer id;
	# String entrydate;
	# Integer kmdriven;
	# Integer releaseyear;
	# String condition;
	# Integer pricekm;
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/car_list", methods=["GET","POST","DELETE"])
def car_list():
    if request.method == "POST":
        url = "http://localhost:3001/cars"
        params = {'id': str(request.form.get("CarID")),
            'entrydate': str(request.form.get("EntryDate")),
            'kmdriven': str(request.form.get("KmDriven")),
            'releaseyear': str(request.form.get("ReleaseYear")),
            'condition': str(request.form.get("CarCondition")),
            'pricekm': str(request.form.get("PriceKm"))
            }
        headers = {'content-type': 'application/json'}
        r = requests.request('POST',url, data = json.dumps(params), headers=headers)

    if request.method == 'DELETE':
        url = 'http://localhost:3001/cars/' + str(request.form.get("DeleteID"))
        delete_r = requests.request('DELETE',url)
        return redirect(url_for('car_list'))
    
    url = "http://localhost:3001/cars"
    r = requests.request("GET",url).json()

    return render_template("car_list.html",responses = r)

@app.route("/add_car_form")
def add_car_form():

    return render_template("add_car_form.html")
