const input = require("readline-sync");
const HospitalMenus = require("./HospitalMenus");
const HospitalWard = require("./HospitalWard");
const Patient = require("./Patient");

class Hospital{

    constructor(){
      this.newHospitalWard = new HospitalWard;
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


    // let newHospitalWard = new HospitalWard();
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
          case "1": // 1. List Patients
            
             for(let i=0;i<this.newHospitalWard.Patients.length;i++){                      
             console.log(this.newHospitalWard.Patients[i]);
            }

              this.response = input.question("Press enter to proceed : ");
          break;

          case "2": // 2. Admit Patient 

              let name = input.question("Enter Patient's Name : ");
              let id = input.question("Enter Patient's ID : ");
              let healthLevel = input.question("Enter Patient's Health Level : ");
              let bloodLevel = input.question("Enter Patient's Blood Level : ");

              this.newHospitalWard.admitPatient(name,id,healthLevel,bloodLevel);

              console.log(this.newHospitalWard.Patients[this.newHospitalWard.Patients.length-1]);

              this.response = input.question("Press enter to proceed : ");

          break;

          case "3": // 3. Discharge Patient 

          this.id = input.question("Enter Discharging Patient's ID : ");
          this.newHospitalWard.dischargePatient(this.id);

          break;

          case "4": // 4. Draw Blood
          break;

          case "5": // 5. Return to Main Menu
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