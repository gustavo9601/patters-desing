class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(){
        return `Full Name: ${this.firstName} ${this.lastName}`;
    }

    getName() {
        return this.firstName;
    }

    setName(value){
        this.firstName = value;
    }

}

const person1 = new Person('Gustavo', 'Marquez', 25);
console.log(person1.fullName());
person1.setName('Adolfo');
console.log(person1.fullName());
