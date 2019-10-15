// eslint-disable-next-line strict
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am', 'Total'];
var tbl = document.createElement('table');
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg; 
  this.salesHour = [];
  this.dailyTotal = 0;


  this.getIt = function () {
    return Math.ceil(Math.random() * (this.max - this.min)) + this.min;
  };
  this.totalEachHour = function () {
    for (var i = 0; i < hours.length; i++) {
      this.salesHour.push(Math.ceil(this.avg * this.getIt()));
      console.log(this.salesHour);
      this.salesHour.textContent;
      this.dailyTotal += this.salesHour[i];
      console.log(this.dailyTotal);
    };
  }

  this.display = function () {
    var trElement = document.createElement('tr');
    var tdShopName = document.createElement('td');
    tdShopName.textContent = this.name;
    trElement.appendChild(tdShopName);
    for (var i = 0; i < this.salesHour.length; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = this.salesHour[i];
      trElement.appendChild(tdElement);
    }
    tdElement.textContent = this.dailyTotal;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  };
  this.time = function () {
    var trElement = document.createElement('tr');
    for (var i = -1; i < this.salesHour.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = hours[i];
      trElement.appendChild(thElement);
    }
    tbl.appendChild(trElement);
    document.body.appendChild(tbl);
  };

};


var seattle = new CookieStand("seattle", 23, 65, 6.3);
var tokyo = new CookieStand("tokyo", 3, 24, 1.2);
var dubai = new CookieStand("dubai", 11, 38, 3.7);
var paris = new CookieStand("paris", 20, 38, 2.3);
var lima = new CookieStand("lima", 2, 16, 4.6);


seattle.totalEachHour();
seattle.time();
seattle.display();
tokyo.totalEachHour();
tokyo.display();
dubai.totalEachHour();
dubai.display();
paris.totalEachHour();
paris.display();
lima.totalEachHour();
lima.display();

var location = new location(document.getElementById('location'), document.getElementById('max'), document.getElementById('min'), (document.getElementById('avg') * document.getElementById('cookies')));
location.totalEachHour();
location.display();

