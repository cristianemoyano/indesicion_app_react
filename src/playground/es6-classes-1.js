class Person {
    constructor(name='Anonymous', age=0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`
    }
    getName() {
        return this.name;
    }
    getGretting() {
        return `Hi. I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()){
            description += `. Their major is ${this.major}`; 
        }
        return description;
    }
}

const me = new Student('Cristian', 24, 'Computer Science');
console.log(me)
console.log(me.hasMajor())
console.log(me.getDescription());

const other = new Person();
console.log(other)
console.log(other.getDescription());
