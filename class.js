class student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = 'BAF Shaheen School Kurmitola';
    }
}

const student1 = new student(25, 'Noman');
const student2 = new student(80, 'Nana');
console.log(student1.name, student2.id);