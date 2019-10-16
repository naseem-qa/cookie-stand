var hours24 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('cookies');
var table = document.createElement('table');
container.appendChild(table);

function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hoursSalesArr = [];
    this.cookiesArr = [];
    this.cookiesSalesTotal = 0;
    this.assignRandomCookies();
    this.generateHourlySales();
}
Cities.prototype.assignRandomCookies = function () {
    for (var i = 0; i <= hours24.length; i++) {
        var randomCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min);
        this.cookiesArr.push(randomCookies);
    }
}
Cities.prototype.generateHourlySales = function () {
    for (var i = 0; i < hours24.length; i++) {
        var hourCookies = Math.ceil(this.cookiesArr[i] * this.avg);
        this.hoursSalesArr.push(hourCookies);
        this.cookiesSalesTotal += hourCookies;
    }
}



function headerRow() {
    var trHead = document.createElement('tr');
    table.appendChild(trHead);
    var thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = ''

    for (var i = 0; i < hours24.length; i++) {
        thHead = document.createElement('th');
        trHead.appendChild(thHead);
        thHead.textContent = hours24[i];
    }
    thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = 'Daily Location Total';
};


Cities.prototype.render = function () {
    var trData = document.createElement('tr');
    table.appendChild(trData);
    var tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.name;
    for (var i = 0; i < hours24.length; i++) {
        tdData = document.createElement('td')
        trData.appendChild(tdData)
        tdData.textContent = this.hoursSalesArr[i];
    }
    tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.cookiesSalesTotal;
};



function footerRow(table) {
    var trFoot = document.createElement('tr');
    table.appendChild(trFoot);
    var tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);
    tdFoot.textContent = 'Total';
    var totalAll = 0;
    for (var index = 0; index < hours24.length; index++) {
        tdFoot = document.createElement('td');
        trFoot.appendChild(tdFoot);
        var hourlyTotal = 0;
        for (var jndex = 0; jndex < locationStore.length; jndex++) {
            hourlyTotal += locationStore[jndex].hoursSalesArr[index];
        }
        tdFoot.textContent = hourlyTotal;
        totalAll += hourlyTotal;
    }
    tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);
    tdFoot.textContent = totalAll;
};


var seattle = new Cities('Seattle', 23, 65, 6.3);
var Tokoy = new Cities('Tokyo', 3, 24, 1.2);
var Dubai = new Cities('Dubai', 11, 38, 3.7);
var Paris = new Cities('Paris', 20, 38, 2.8);
var Lima = new Cities('Lima', 2, 16, 4.6);
var locationStore = [seattle, Tokoy, Dubai, Paris, Lima];




headerRow(table);
for (var index = 0; index < locationStore.length; index++) {

    var towns = locationStore[index];
    towns.render();

}

footerRow(table);








// // eslint-disable-next-line strict
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7am', 'Total'];
// var container = document.getElementById('loc');
// var tbl = document.createElement('table');
// container.appendChild(tbl)

// function CookieStand(name, min, max, avg) {
//   this.name = name;
//   this.min = min;
//   this.max = max;
//   this.avg = avg; 
//   this.salesHour = [];
//   this.dailyTotal = 0;
//   this.getIt();

// }
//   CookieStand.prototype.getIt = function () {
//     return Math.ceil(Math.random() * (this.max - this.min)) + this.min;
//   }
//   this.totalEachHour = function () {
//     for (var i = 0; i < hours.length; i++) {
//       this.salesHour.push(Math.ceil(this.avg * this.getIt()));
//     //   console.log(this.salesHour);
//       this.salesHour.textContent;
//       this.dailyTotal += this.salesHour[i];
//     //   console.log(this.dailyTotal);
//     };
//   }

//   this.display = function () {
//     var trElement = document.createElement('tr');
//     var tdShopName = document.createElement('td');
//     tdShopName.textContent = this.name;
//     trElement.appendChild(tdShopName);
//     for (var i = 0; i < this.salesHour.length; i++) {
//       var tdElement = document.createElement('td');
//       tdElement.textContent = this.salesHour[i];
//       trElement.appendChild(tdElement);
//     }
//     tdElement.textContent = this.dailyTotal;
//     trElement.appendChild(tdElement);
//     tbl.appendChild(trElement);
//     document.body.appendChild(tbl);
//   };
//   this.time = function () {
//     var trElement = document.createElement('tr');
//     for (var i = -1; i < this.salesHour.length; i++) {
//       var thElement = document.createElement('th');
//       thElement.textContent = hours[i];
//       trElement.appendChild(thElement);
//     }
//     tbl.appendChild(trElement);
//     document.body.appendChild(tbl);
//   };



// function footer (){
// var trF = document.createElement('tr');
// tbl.appendChild(trF);

// var tdF =document.createElement('td');
// trF.appendChild(tdF);
// tdF.textContent ="Total"

// }


// var seattle = new CookieStand("seattle", 23, 65, 6.3);
// var tokyo = new CookieStand("tokyo", 3, 24, 1.2);
// var dubai = new CookieStand("dubai", 11, 38, 3.7);
// var paris = new CookieStand("paris", 20, 38, 2.3);
// var lima = new CookieStand("lima", 2, 16, 4.6);


// // seattle.time();
// // seattle.display();
// // tokyo.totalEachHour();
// // tokyo.display();
// // dubai.totalEachHour();
// // dubai.display();
// // paris.totalEachHour();
// // paris.display();
// // lima.totalEachHour();
// // lima.display();

// footer();

// // var location = new location(document.getElementById('location'), document.getElementById('max'), document.getElementById('min'), (document.getElementById('avg') * document.getElementById('cookies')));
// // location.totalEachHour();
// // location.display();

