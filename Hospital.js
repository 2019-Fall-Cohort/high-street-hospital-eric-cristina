const input = require("readline-sync");
const HospitalMenus = require("./HospitalMenus");
const HospitalWard = require("./HospitalWard");
const Patient = require("./Patient");

class Hospital{

    constructor(){
      this.HospitalWard;
    }

  welcome(){

    console.log();
    console.log();
    console.log(">>>>>> Welcome to the High Street Hospital <<<<<<");
    console.log();
    console.log();

    const response = input.question("Press enter to proceed : ");
  }

displayMainMenu(){

  let myMenu = new HospitalMenus();

  let itemChoice =  myMenu.chooseFromMenu("default");

  let whichMenu = myMenu.selectMenu(itemChoice);

  return whichMenu;

}
  
  getUserSelection(whichMenu){

    const myMenu = new HospitalMenus();

    let itemChoice =  myMenu.chooseFromMenu(whichMenu);

    let stillWorking = true;


    let newHospitalWard = new HospitalWard();
    let response = "";


    switch(whichMenu){

      case "admin":

        switch(itemChoice){
        
            case "1": console.log("1. List Employees");
            break;

            case "2": console.log("2. Add New Employee");
            break;

            case "3": console.log("3. Remove Employee");
            break;

            case "4": console.log("4. Return to Main Menu");
            stillWorking = false;
            break;

        }

      break;


      case "patient":

        switch(itemChoice){
          case "1": //console.log("1. List Patients");
            //  const newHospitalWard = new HospitalWard();
              const patientList = this.newHospitalWard.Patients;
              console.log(patientList.length);
              // for(let i=0;i<patientList.length+1;i++){
              //   console.log(patientList[i]);
              // }

              this.response = input.question("Press enter to proceed : ");
          break;

          case "2": //console.log("2. Admit Patient");

              // newHospitalWard.admitPatient("fred","123",5,9);

              // console.log(newHospitalWard.Patients[0]);

              HospitalWard.admitPatient("fred","123",5,9);

              console.log(HospitalWard.Patients[0]);

              this.response = input.question("Press enter to proceed : ");

          break;

          case "3": console.log("3. Discharge Patient");
          break;

          case "4": console.log("4. Draw Blood");
          break;

          case "5": console.log("5. Return to Main Menu");
              stillWorking = false;
          break;
        }
      break;

      default:

        stillWorking = false;
     
    }
  
    return stillWorking;
  }

}

module.exports = Hospital;