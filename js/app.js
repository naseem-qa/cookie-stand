
var hours24 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var container = document.getElementById('cookies');

function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hourlySale = [];
    this.dailySale = 0;
    this.cookiesHourlySales();

}




Cities.prototype.cookiesHourlySales = function () {

    for (var i = 0; i < hours24.length; i++) {

        var cookiesSoldinThisHour = Math.ceil(Math.floor(Math.random() * (this.max - this.min)) + this.min * this.avg);

        this.hourlySale.push(cookiesSoldinThisHour);

        this.dailySale += cookiesSoldinThisHour;

    }
}


var table = document.createElement('table');
container.appendChild(table);


// header row
function renderHr(table) {

    var tr = document.createElement('tr');
    table.appendChild(tr);
    var th = document.createElement('th');
    tr.appendChild(th);

    for (var i = 0; i < hours24.length; i++) {
        th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = hours24[i];
    }

    th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = 'Daily Location Total';

}

Cities.prototype.render = function (table) {

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;

    for (var i = 0; i < hours24.length; i++) {

        var td = document.createElement('td');

        tr.appendChild(td);

        td.textContent = this.hourlySale[i];
    }

    var td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.dailySale;
}


// //  footer row
function renderFr(table) {

    var tr = document.createElement('tr');

    table.appendChild(tr);

    var td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = 'Totals';


    var totalTotal = 0;

    for (var hIndex = 0; hIndex < hours24.length; hIndex++) {

        td = document.createElement('td');

        tr.appendChild(td);

        var sum = 0;

        for (var citiesIndex = 0; citiesIndex < places.length; citiesIndex++) {

            var shop = places[citiesIndex];

            sum += shop.hourlySale[hIndex];
        }

        td.textContent = sum;

        totalTotal += sum;
    }

    td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = totalTotal;

}

var seattle = new Cities('Seattle', 23, 65, 6.3);
var Tokoy = new Cities('Tokyo', 3, 24, 1.2);
var Dubai = new Cities('Dubai', 11, 38, 3.7);
var Paris = new Cities('Paris', 20, 38, 2.8);
var Lima = new Cities('Lima', 2, 16, 4.6);

var places = [seattle, Tokoy, Dubai, Paris, Lima];

renderHr(table);

for (var i = 0; i < places.length; i++) {

    var shop = places[i];

    shop.render(table);
}
renderFr(table);





