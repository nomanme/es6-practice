class Parent {
    constructor() {
        this.fatherName = 'Schewenegger';
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + ' ' + this.fatherName;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child('Tommy');
console.log(baby.getFullName(), baby2.getFullName());