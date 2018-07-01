'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    return a + b;
};

console.log(add(55, 1, 1001));

// this keyword - no longer bound

var user = {
    name: 'Cristian',
    cities: ['Mendoza', 'Maipú', 'Luján'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var that = this;
        this.cities.forEach(function (city) {
            console.log(_this.name + ' has lived in ' + city);
        });
    },
    printCitiesLived: function printCitiesLived() {
        var _this2 = this;

        return this.cities.map(function (city) {
            return _this2.name + ' has lived in ' + city;
        });
    }
};
user.printPlacesLived();
console.log(user.printCitiesLived());

// multiplier
var multiplier = {
    numbers: [1, 2, 3, 4, 5, 6],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this3 = this;

        return this.numbers.map(function (num) {
            return num * _this3.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
