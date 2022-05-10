function minMax(arr){

    let min=arr[0];

    let max=arr[0];

    for (let index = 0; index < arr.length; index++) {

        if(min>arr[index]){

            min=arr[index];

        }

        if(max<arr[index]){

            max=arr[index];

        }

        

    }

    console.log("min is : "+ min+"\nmax is : "+max);



};

let arr=[32,5,46,8,90,7,0,100];

minMax([32,5,46,8,90,7,0,100]);