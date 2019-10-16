var hours24 = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesArray: [],



    ramdom: function () {
        var range = this.max - this.min;
        var rand = Math.floor(Math.random() * range) + this.min;
        return rand;
    },
    numcookies: function () {
        for (i = 0; i < hours24.length; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.avg * this.ramdom());
            this.cookiesArray[i] = this.amountOfCookiesCeil;
        }
        return this.cookiesArray;
    },
}


var Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesArray: [],
    Random: function () {
        var range = this.max - this.min;
        var rand = Math.floor(Math.random() * range) + this.min;
        return rand;
    },
    numcookies: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
            this.cookiesArray.push(this.amountOfCookiesCeil);
        }
        return this.cookiesArray;
    },
}


var Dubai = {
    min: 11,
    max: 38,
    TheAv: 3.7,
    cookiesArray: [],
    Random: function () {
        var range = this.max - this.min;
        var rand = Math.floor(Math.random() * range) + this.min;
        return rand;
    },
    numcookies: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.cookiesArray.push(this.amountOfCookiesCeil);
        }
        return this.cookiesArray;
    },
}


var Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesArray: [],
    Random: function () {
        var range = this.max - this.min;
        var rand = Math.floor(Math.random() * range) + this.min;
        return rand;
    },
    numcookies: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.avg * this.Random());
            this.cookiesArray.push(this.amountOfCookiesCeil);
        }
        return this.cookiesArray;
    },
}


var Lima = {
    max: 2,
    max: 16,
    TheAv: 4.6,
    cookiesArray: [],
    Random: function () {
        var range = this.max - this.max;
        var rand = Math.floor(Math.random() * range) + this.max;
        return rand;
    },
    numcookies: function () {
        for (i = 0; i < 15; i++) {
            this.amountOfCookiesCeil = Math.ceil(this.TheAv * this.Random());
            this.cookiesArray.push(this.amountOfCookiesCeil);
        }
        return this.cookiesArray;
    },
}
seattle.numcookies();
Tokyo.numcookies();
Dubai.numcookies();
Paris.numcookies();
Lima.numcookies();



var cities = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
var cities2 = [seattle, Tokyo, Dubai, Paris, Lima];


for (var k = 0; k < cities.length; k++) {
    var count = 0;
    document.write("<h2>", "* ", cities[k], "</h2>");
    document.write("<ul>");
    for (i = 0; i < hours24.length; i++) {
        count += cities2[k].cookiesArray[i];
        document.write("<li>");
        document.write(hours24[i], ":", cities2[k].cookiesArray[i], "Cookies.");
        document.write("<br>");
        document.write("</li>");
    }
    document.write("<li>", "Total:", count, "Cookies.");
    document.write("</ul>");
}