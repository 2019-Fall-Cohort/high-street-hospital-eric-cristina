
const Medical = require("./Medical");

class Doctor extends Medical {

    constructor(_name, _id, _salary){
        super(_name, _id, _salary);
        this.name = "NoName";      
        this.idNumber = 0; 



    }
    drawBlood() {
        this.drawBlood = false;
        return this.drawBlood;
    }
    careForPatient() {
        this.careForPatient = false;
        return this.careForPatient;
    }
    notDrawingBlood() {
        return this.Drawing =false;
    }
    notCaringPatient () {
        return this.notCaring = false;

    }



}

module.exports = Doctor;
