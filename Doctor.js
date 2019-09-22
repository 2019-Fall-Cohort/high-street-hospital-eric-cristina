class Doctor {

    constructor(){

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
alert(Doctor instanceof Medical)
module.exports = Doctor;

