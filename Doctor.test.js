const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");

describe("Doctor" , () => {
    test("" , () => {
     const testDoctor = new Doctor();

    expect(testDoctor.drawBlood()).toEqual(false);
    expect(testDoctor.careForPatient()).toEqual(false);
    })

})





describe ("Surgeon",() => {
    test(" ",() => {
        const testSurgeon = new Surgeon();

        expect(testSurgeon.isOperating()).toEqual(false);
        })
    })











