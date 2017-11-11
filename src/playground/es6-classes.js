class Person {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }

    getDescription() {
        return `${this.name} your age is ${this.age}`;
    }
}

const p1 = new Person('Ashish');
console.log(p1.getDescription());