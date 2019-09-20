class Janitor {

    constructor() {

        this.name = "NoName";      
        this.idNumber = 0;       
        this.sweeping = false;

    }


    isSweeping() {

        return this.sweeping;
    }

    startSweeping() {

        return this.sweeping = true;
    }

    stopSweeping() {

        return this.sweeping = false;
    }


}

// class VampireJanitor extends Janitor {

// constructor(){

//     super();

// }

//     drawBlood(){
//         return "Yummy, blood";



//     }

// }
module.exports = Janitor;
// module.exports = VampireJanitor;

