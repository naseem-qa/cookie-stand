var Seattle = {
    'min': 23,
    'max': 65,
    'Avg': 6.3,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Tokyo = {
    'min': 3,
    'max': 24,
    'Avg': 1.2,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Dubai = {
    'min': 11,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Paris = {
    'min': 20,
    'max': 38,
    'Avg': 3.7,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 var Lima = {
    'min': 2,
    'max': 16,
    'Avg': 4.6,
    avrcustmer: function () {
        var range = this.max - this.min;
        var rand = Math.random() * range + this.min;
        return Math.ceil(rand);
    }
 };
 console.log("Seattle " + Seattle.avrcustmer());
 console.log("Tokyo " +  Tokyo.avrcustmer());
 console.log("Dubai " + Dubai.avrcustmer());
 console.log("Paris " + Paris.avrcustmer());
 console.log("Lima " + Lima.avrcustmer());

 var cities= ['Seattle','Tokyo','Dubai','Paris', 'Lima'];
 var hours = [ '6am:','7am' ,' 8am:','9am: ','10am:' ,'11am: ','12pm: ',' 1pm: ','2pm:' ,'3pm:' ,'4pm:' ,'5pm:' ,'6pm:','7pm: ','Total:' ];
 var Cookies=[];

 for (i=0, i<cities.length [0], i++){
     for (j=0, j<hours.length, j++){
        Cookies  = cities[i].avrcustmer ()*avg;
      
     }

 }

 do