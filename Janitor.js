class Janitor {

    constructor() {

        this.namename = "Noname";      
        this.idNumber = 0;       
        this.sweeping = false;

    }


    isSweeping() {

        return this.sweeping
    }

    startSweeping() {

        this.sweeping = true;
    }

    stopSweeping() {

        this.sweeping = false;
    }


}

class VampireJanitor extends Janitor {

constructor(){

    super();

}

    drawBlood(){



    }

}
module.exports = Janitor;