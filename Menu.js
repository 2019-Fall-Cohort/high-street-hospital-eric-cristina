class Menu{


    constructor(whichMenu){

        this.whichMenu = whichMenu;
        selection = 0;

    }

    switch(whichMenu){
  
        case "admin":

            console.clear();
            console.log();
            console.log("1. List Employees");
            console.log("2. Add New Employee");
            console.log("3. Remove Employee");
            console.log();
            console.log();


            break;

        case "patient":

            console.clear();
            console.log();
            console.log("1. List Patients");
            console.log("2. Admit Patient");
            console.log("3. Discharge Patient");
            console.log();
            console.log();

            break;


        default:

            
            console.clear();
            console.log();

            console.log(array(47).join(1,"-"));

            console.log();
            console.log("How shall I direct you?");
            console.log();
            console.log("1. Patient Services");
            console.log("2. Administrative Services");
            console.log();
            console.log();

            console.log(array(47).join(1,"-"));

            break;
        
    }

    selection = input(": ");
    
    return selection;
}

module.exports = Menu();