//console.log(window)

//window.alert(1);

//alert(1)// it will also work because part of window object which in topmoost



//single element selector



//console.log(document.getElementById('my-form'));

//const form=document.getElementById('my-form')

//console.log(form)

console.log(document.querySelector('#my-form'))

console.log(document.querySelector('.items'))

//select first imput tag....

console.log(document.querySelector('input'));





// multiple elemnt select

console.log(document.getElementsByClassName('items'));

console.log(document.getElementsByTagName('label'));// return array of

//html collection



console.log("selector " ,document.querySelectorAll('items'));

//return Nodelist array



// nodelist array is just like and follow methods and propertty of

// array, while html collection not..



// we prefer to use querySelector for single element

// and querySelectorAll for multiple elements

// queryselector return the value that can be store in a variab;e

//for furthure proceess or manipulation

const ul=document.querySelector('.items');

ul.firstElementChild.innerHTML="<li style='color:green'>Hello</li>"

ul.children[1].innerHTML="<li style='color:Yellow'>Yellow</li>"



const btn= document.querySelector('#btn');

/*

btn.style.color='white';

btn.addEventListener('click',(e)=>{

  //click or mouseover or mouseout

  e.preventDefault();//to stay of console. output

  console.log("clicked submit");

  ul.lastElementChild.textContent="last Child"

  ul.lastElementChild.style.color='red';

  document.querySelector('body').classList.add('bg-dark');

})

*/



const myform=document.querySelector('#my-form');

const nameInput=document.querySelector('#name');

const email=document.querySelector('#email');

const phone=document.querySelector('#phone');

const msg=document.querySelector('#msg');

const userList=document.querySelector('#users');



btn.addEventListener('click',onSubmit);

function onSubmit(e){

  //e.preventDefault();

  if(nameInput.value==='' || email.value==='' || phone.value===''){

    msg.classList.add('error')

    msg.innerHTML="Please Enter details";



    setTimeout(()=> msg.remove(),3000)



  }else{

    console.log(nameInput.value,email.value,phone.value)

    const li=document.createElement('li');

    li.appendChild(document.createTextNode(`

    ${nameInput.value} : ${email.value} : ${phone.value}`));



    userList.appendChild(li);



    //clear all the fiel;d at the end

    nameInput.value='';

    email.value='';

    phone.value='';



  }

}