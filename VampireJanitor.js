const Janitor = require("./Janitor");

class VampireJanitor extends Janitor {


    constructor(name,idNumber,sweeping){
    
        super(name,idNumber,sweeping);

    
    }
    
        drawBlood(){
          return "Yummy, blood";   


        }
    
    }


    module.exports = VampireJanitor;
    

