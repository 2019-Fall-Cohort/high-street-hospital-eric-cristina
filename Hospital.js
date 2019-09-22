const input = require("readline-sync");
const HospitalMenus = require("./HospitalMenus");

class Hospital{

    constructor(){
        
    }

  welcome(){

    console.log();
    console.log();
    console.log(">>>>>> Welcome to the High Street Hospital <<<<<<");
    console.log();
    console.log();

    const response = input.question("Press enter to proceed : ");
  }


  
  getUserSelection(){

    const myMenu = new HospitalMenus();

    let itemChoice =  myMenu.chooseFromMenu("default");

    let whichMenu = myMenu.selectMenu(itemChoice);

    itemChoice =  myMenu.chooseFromMenu(whichMenu);

    switch(whichMenu){

      case "admin":

        switch(itemChoice){

          case "1": console.log("1. List Employees");
          break;

          case "2": console.log("2. Add New Employee");
          break;

          case "3": console.log("3. Remove Employee");
          break;

        }

      break;


      case "patient":
        switch(itemChoice){
          case "1": console.log("1. List Patients");
          break;

          case "2": console.log("2. Admit Patient");
          break;

          case "3": console.log("3. Discharge Patient");
          break;

          case "4": console.log("4. Draw Blood");
          break;
        }
      break;

      default:
     
    }

  }

}

module.exports = Hospital;