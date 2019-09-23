const Employee = require("./Employee");

class NotMedical extends Employee {
constructor(_name, _id, _salary) {
    super(_name, _id, _salary);
    /*if(this.constructor === NotMedical){
        throw new Error("nothing");
    }*/
       
    // super(_name, _id, _salary) {
    //     throw new Error("nothing");
}
}
module.exports = NotMedical;
