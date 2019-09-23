const NotMedical = require("./NotMedical");

class Janitor extends NotMedical {

    constructor(name,idNumber,sweeping) {
        super(_name, _id, _salary);
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


module.exports = Janitor;



