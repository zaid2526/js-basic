class Student{

    constructor(firstname,lastName,dob){

        this.firstname=firstname;

        this.lastName=lastName;

        this.dob=new Date(dob);

    }

    getFullName(){

        return `${this.firstname} ${this.lastName}`;

    }

    getBirthYear(){

        return `${this.dob.getFullYear()}`;

    }

}

const student1=new Student('mohd','zaid','6-7-1995');

const student2=new Student('alam','jamal','9-8-1996');



console.log(student1.getFullName());

console.log(student1.getBirthYear());