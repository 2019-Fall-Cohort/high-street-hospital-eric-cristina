class Janitor {

    constructor(name,idNumber,sweeping) {

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


