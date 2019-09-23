//const Medical = require("./Medical");


const Doctor = require("./Doctor");

class Surgeon extends Doctor{

    constructor(_name, _id, _salary){
        
        super(_name, _id, _salary);
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
