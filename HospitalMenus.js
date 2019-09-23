const input = require("readline-sync");

class HospitalMenus{


    constructor(){

      let selection;
    }
    
    selectMenu(selection){
        
        let whichMenu = ""

        switch(selection){

            case "1":

                whichMenu = "admin";
                break;

            case "2":

                whichMenu = "patient";
                break;

            case "3":

                whichMenu = "quit";
                break;

            default:

                whichMenu ="default";
        }   

        return whichMenu;

    }

    chooseFromMenu(whichMenu){
      

        switch (whichMenu) {
    
            case "admin":

                console.clear();
                console.log();
                console.log(Array(47).join("-"));
                console.log("Administrative Services");
                console.log(Array(47).join("-"));
                console.log();
                console.log("1. List Employees");
                console.log("2. Add New Employee");
                console.log("3. Remove Employee");
                console.log("4. Return to Main Menu");
                console.log();
                console.log();

                break;

            case "patient":

                console.clear();
                console.log();
                console.log(Array(47).join("-"));
                console.log("Patient Services");
                console.log(Array(47).join("-"));
                console.log();
                console.log("1. List Patients");
                console.log("2. Admit Patient");
                console.log("3. Discharge Patient");
                console.log("4. Draw Blood");
                console.log("5. Return to Main Menu");
                console.log();
                console.log();

                break;


            default:

                
                console.clear();
                console.log();

                console.log(Array(47).join("-"));

                console.log();
                console.log("How shall I direct you?");
                console.log();
                console.log("1. Administrative Services");
                console.log("2. Patient Services");
                console.log("3. Exit Hospital");
                console.log();
            
        }

        let selectedItem = input.question(": ");
        
        return selectedItem;
        }
    

    }

module.exports = HospitalMenus;