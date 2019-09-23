const Medical = require("./Medical");
const Employee = require("./Employee");

describe ("Medical",() => {
    let Med = new Medical('Steve' , 1002, 90000);
    test("if medical extends employee", () => {

        //  let testDoctor = new Doctor();

    expect(Med instanceof Employee).toBeTruthy();

    });


});
