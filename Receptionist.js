const NotMedical = require("./NotMedical");

class Receptionist extends NotMedical  {

    constructor(_name, _id, _salary) {
        super (_name, _id, _salary);
        this.name = "NoName"
        this.idNumber = 0;
        this.onPhone = false;
    }
    isOnPhone() {
        return this.onPhone 

    } 
    answerPhone() {
        return this.onPhone = true; 
    }
    hangUpPhone () {
        return this.onPhone = false;
    }

}
module.exports = Receptionist; 

// constructor(id, firstName = "Maria" , lastName ="Perez") 
// import { tsConstructorType } from "@babel/types"

// const input = require('readline-sync');
// class Doctor {
//     constructor()
//        drawBlood = true
//        careForPatient = true
       
// }
// console.log("Here are the employees at High St Hospital");