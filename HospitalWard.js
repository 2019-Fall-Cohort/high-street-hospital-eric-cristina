const input = require("readline-sync");
const Patient = require("./Patient");

class HospitalWard{

    constructor() {

        this.Patients =[];    
        
    }

    admitPatient(_name, _id, HEALTH_LEVEL, BLOOD_LEVEL){

        const admittingPatient = new Patient(_name, _id, HEALTH_LEVEL, BLOOD_LEVEL);
        this.Patients.push(admittingPatient);
    }

    pushNewPatient(newPatient){
        this.Patients.push(newPatient);
    }

    dischargePatient(patientID){
        let match = false;
        let matchIndex;

        for (let i=0;i<=this.Patients.length-1;i++){   
           if (patientID == this.Patients[i].id){
            match = true;
            matchIndex = i;
            break;
           }
        }
        if (match) {

            console.log("Dischargeing Patient: " + this.Patients[matchIndex].name + " (" + this.Patients[matchIndex].id + ")");
            this.Patients.splice(matchIndex,1);

        } else {   
            
            console.log();
            console.log("Not a valid Patient ID");
            console.log();
        }
 
    }


getAllPatients() {
    return this.Patients;      
   }
}

module.exports = HospitalWard;