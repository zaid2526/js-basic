const convertTemp=(temp)=>{

    return temp+273;

}

console.log(convertTemp(35),'c');



//using ternary Operater.......

const convertTempUnit=(temp,conversionUnit)=> conversionUnit=='K' ? temp+273: temp-273;

console.log(convertTempUnit(35,'K'))



//using switch case............

const tempUnit=()=>{

    let temp=prompt('Enter temparture value');

    let conversionUnit=prompt('Enter the in which youwant to convertion (in Captal)');

    //console.log(typeof parseInt(temp))

    switch(conversionUnit){

        case 'K':

            return parseInt(temp)+273;

        case 'C':

            return parseInt(temp)-273;

        default:

            return "Enter valid converstion unit";

    }

}

console.log(tempUnit());



