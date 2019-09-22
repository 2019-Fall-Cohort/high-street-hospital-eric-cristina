class Janitor extends NotMedical{

    constructor() {
        super('NoName', 1, 40000);       
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

