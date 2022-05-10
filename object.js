const person={

    firstName:'mohd',

    lastName:'zaid',

    age:27,

    hobbies:['workout','cricket','movies'],

    address:{

        street:'4 jam nagar',

        city:'hyderabad',

        state:'telengana',

    }

}

console.log(person.hobbies[2]);

console.log(person.address.state);



//Destructring.....

const {age,address:{state}}=person;

console.log(age);

console.log(state);



const todos=[

    {

        id:1,

        text:'travelling to delhi',

        isCompeletd:false,

    },

    {

        id:2,

        text:'attend the live lecture',

        isCompeletd:true,

    },

    {

        id:3,

        text:"mock test with mentor",

        isCompeletd:false,

    }



];



// for loop.......

for(let i=0; i<todos.length;i++){

    console.log(todos[i].id);

}



//for loop another way....

for(todo of todos){

    console.log(todo.id);

}



//while loop.........

let i=0;

while(i<todos.length){

    console.log(todos[i].id);

    i++;

}