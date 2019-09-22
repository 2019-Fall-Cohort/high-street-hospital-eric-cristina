const Medical = require("./Doctor");

describe ("Doctor",() => {
    test("", () => {

         let testDoctor = new Doctor();

    expect(testDoctor.isDrawing()).toEqual(false);
    })


})
