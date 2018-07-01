// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
    name: 'Cristian',
    cities: ['Mendoza', 'Maipú', 'Luján'],
    printPlacesLived() {
        const that = this;
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in '+ city)
        });
    },
    printCitiesLived() {
        return this.cities.map((city)=>this.name + ' has lived in '+ city);
    },
}
user.printPlacesLived();
console.log(user.printCitiesLived());

// multiplier
const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((num)=> num*this.multiplyBy);
    }
}
console.log(multiplier.multiply())