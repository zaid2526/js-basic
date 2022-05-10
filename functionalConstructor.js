function Student(firstName,lastName,rollNumber,sex,dob){

    this.firstName=firstName;

    this.lastName=lastName;

    this.rollNumber=rollNumber;

    this.sex=sex;

    this.dob=new Date(dob);

    //4.................

    this.getBirthYear=function(){

        return dob.getFullYear;

    }

    this.getFullName=function(){

        return `${this.firstName} ${this.lastName}`;

    }

}

//2................................

const student1=new Student('mohd','zaid',243,'male','4-3-1995');

const student2=new Student('alam','jamal',387,'male','6-7-2005');

//3..................

if(student1.dob.getFullYear<student2.dob.getFullYear){

    console.log(`full name ${student1.firstName} ${student1.lastName}`);

}else{

    console.log(`full name ${student2.firstName} ${student2.lastName}`);

}





Student.prototype.age=function(){

    let today=new Date();

    return today.getFullYear() - this.dob.getFullYear();



}



/*

Student.prototype.getFullName=function(){

    return `${this.firstName} ${this.lastName}`

} 

if(student1.age()>student2.age()){

    console.log(`${student1.getFullName()} with age ${student1.age()}`);

}else{

    console.log(`${student2.getFullName()} with age ${student2.age()}`);

}

*/

//5............

//let minAge=student1.age();

Student.prototype.eligible =function(minAge){

    

    if(this.age()>minAge){

      return  `${this.getFullName()} is eligible`

    }

    else{

        return `${this.getFullName()} not eligible`;

    }

}

console.log(student1.eligible(18));

console.log(student2.eligible(18));