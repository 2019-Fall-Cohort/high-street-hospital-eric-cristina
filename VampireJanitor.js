const Janitor = require("./Janitor");

class VampireJanitor extends Janitor {

    constructor(){
    
        super('Brad', 6,40000 );
    
    }
    
        drawBlood(){
            return "Yummy, blood";
    
    
    
        }
    
    }

    module.exports = VampireJanitor;