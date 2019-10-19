`use strict`;

var hours24 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('cookies');
var table = document.createElement('table');
container.appendChild(table);

var foot;

function addElement(tagName, container, text) {
    var element = document.createElement(tagName);
    container.appendChild(element);

    if (text) {
        element.textContent = text;
    }

    return element;
}

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

Cities.prototype.row = function (table) {

    var newLocationRow = addElement('tr', table);

    addElement('td', newLocationRow, this.name);

    for (var i = 0; i < this.hourlySale.length; i++) {
        var currentHourlySales = this.hourlySale[i];
        addElement('td', newLocationRow, currentHourlySales);
    }

    addElement('td', newLocationRow, this.dailySale);


}


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

// sales rows
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

    foot = tr;

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

            var store = places[citiesIndex];

            sum += store.hourlySale[hIndex];
        }

        td.textContent = sum;

        totalTotal += sum;
    }

    td = document.createElement('td');

    tr.appendChild(td);

    td.textContent = totalTotal;

};
var places = []
places.push(new Cities('Seattle', 23, 65, 6.3));
places.push(new Cities('Tokyo', 3, 24, 1.2));
places.push(new Cities('Dubai', 11, 38, 3.7));
places.push(new Cities('Paris', 20, 38, 2.8));
places.push(new Cities('Lima', 2, 16, 4.6));

///////////////////////////
renderHr(table);

for (let k = 0; k < places.length; k++) {

    var towns = places[k];
    towns.render(table);

}


renderFr(table);

function formNew(event) {
    event.preventDefault();

    var name = event.target.city.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.Averagenew.value);

    var newLocation = new Cities(name, min, max, avg);

    places.push(newLocation);

    table.removeChild(foot)

    newLocation.row(table);

    renderFr(table);

}

var form = document.getElementById('citiesForm')
form.addEventListener('submit', formNew)
