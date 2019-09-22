

const Doctor = require("./Doctor");

class Surgeon extends Doctor{

    constructor(){
        
        super();
        this.operating = false;   
        
        
}
       

isOperating(){

return this.operating;

}

beginOperating(){

    this.operating = true;
}

finishOperating(){

    this.operating = false;
}


}

module.exports = Surgeon;