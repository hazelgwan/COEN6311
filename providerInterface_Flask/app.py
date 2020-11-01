from flask import Flask, redirect, url_for, render_template, request
# To start server : 
# First: C:\Users\OS\COEN6311\car-rental-all-class
# Then: ./mvnw spring-boot:run
from datetime import date

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

@app.route("/car_list", methods=["GET","POST"])
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
        
    
    url = "http://localhost:3001/cars"
    r = requests.request("GET",url).json()

    return render_template("car_list.html",responses = r)

@app.route("/add_car_form")
def add_car_form():
    
    today = date.today()
    d1 = today.strftime("%Y-%m-%d")

    return render_template("add_car_form.html",today = d1)

@app.route("/delete_confirmation", methods=["POST"])
def delete_confirmation():
    deleteID = str(request.form.get("DeleteID"))
    entryDate = str(request.form.get("DeleteEntrydate"))
    kmDriven = str(request.form.get("DeleteKmdriven"))
    releaseYear = str(request.form.get("DeleteReleaseyear")) 
    condition = str(request.form.get("DeleteCondition"))
    priceKm = str(request.form.get("DeletePricekm"))
    return render_template("delete_confirmation.html", deleteID = deleteID, entryDate = entryDate, kmDriven = kmDriven, releaseYear = releaseYear, condition = condition, priceKm = priceKm)

@app.route("/delete", methods=["POST"])
def delete():
    url = 'http://localhost:3001/cars/' + str(request.form.get("DeleteID"))
    delete_r = requests.request('DELETE',url)
    return redirect(url_for("car_list"))

