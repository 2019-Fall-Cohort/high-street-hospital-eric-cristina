// const input = require("readline-sync");
const Hospital = require("./Hospital");
//const HospitalMenus = require("./HospitalMenus");

const myHospital = new Hospital;

myHospital.welcome();

//const myMenu = new HospitalMenus();
let quit = false;

while (!quit){

    let whichMenu = myHospital.displayMainMenu();

     if (whichMenu !== "quit"){

     
        let stillWorking = true;

        while (stillWorking) {

            
            stillWorking = myHospital.getUserSelection(whichMenu);
            //console.log("index stillWorking = " + stillWorking);

        }
     }else{

        quit = true;

     }

}
