const input = require("readline-sync");
const Hospital = require("./Hospital");

const myHospital = new Hospital;

myHospital.welcome();


let quit = false;

while (!quit){

    let whichMenu = myHospital.displayMainMenu();

     if (whichMenu !== "quit"){

     
        let stillWorking = true;

        while (stillWorking) {

            
            stillWorking = myHospital.getUserSelection(whichMenu);
        }
     }else{

        quit = true;

     }

}
