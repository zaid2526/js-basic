class User{

    static registeredUser=0;

    constructor(userName,email,password,doj){

        this.userName=userName;

        this.email=email;

        this.password=password;

        User.registeredUser++;

        this.activationDate=new Date(doj).getTime();

        this.tillDate=new Date(this.activationDate+2678400000).getTime();

        

    }

   

    register(){

        console.log(`${this.userName} is regidtered`);

    }

    isMember(){

        let currTime=new Date().getTime();

        if(this.tillDate<currTime){

            return false

        }else{

            return true;

        }

    }

    renewMembership(typeMembership){

        if(!(this.isMember())){

            let currTime=new Date().getTime()

            switch(typeMembership){

                case 'Standard':

                    this.tillDate=new Date(currTime + 2678400000);

                    console.log(new Date(this.tillDate));

                    break;

                case 'Yearly':

                    this.tillDate=new Date(currTime + 3.156e+10);

                    console.log(new Date(this.tillDate));

                    break;

                case 'default':

                    console.log("Entre valid membership type");

            }



        }

        



    }

    

}

const zaid=new User('zaid','zaid@email.com', '21646','2022,3,2');

const alam=new User('alam','alam@email.com', '21646','2022,5,1');

zaid.register();

console.log("1 ", zaid.isMember());

console.log(alam.isMember());

zaid.renewMembership('Standard');

//zaid.renewMembership('Yearly');

console.log("after", zaid.isMember());



console.log(`Registered User is ${User.registeredUser}`);



class Member extends User{

    constructor(userName,email,password,doj,memberPakage){

        super(userName,email,password,doj);

        this.memberPakage=memberPakage;

    }

    getPackage(){

        console.log(`${this.userName} is registered ${this.memberPakage} pakage.`)

    }



}

const mike=new Member('mike','mike@gxsh.com','868','2022,3,1','full-stack');

mike.getPackage();

mike.register();