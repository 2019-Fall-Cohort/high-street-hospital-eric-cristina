const NotMedical = require("./NotMedical");
const Employee = require("./Employee");

describe('NotMedical', () => {
    let notMed = new NotMedical('Barb', 1001, 45000);
    test("if not medical extends employee" , () => {
        expect(notMed instanceof Employee).toBeTruthy();


        });
   });