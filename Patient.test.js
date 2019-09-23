const input = require("readline-sync");
const Patient = require("./Patient");
const HospitalWard = require("./HospitalWard");

describe("HospitalWard", () =>{
    describe("Patients in Ward", () => {
        test("Is Patients an array?", ()=> {

            // Arrange
            let newHospitalWard = new HospitalWard();

            // Act
            
            newHospitalWard.admitPatient("fred","P001",7,12);
            newHospitalWard.admitPatient("ethel","P002",6,11);
            newHospitalWard.admitPatient("lucy","P003",3,7);
        
            // Assert
            expect(Array.isArray(newHospitalWard.Patients)).toEqual(true);

        }) 
    

    })
})

describe("HospitalWard", () =>{
    describe("Patients in Ward", () => {
        test("Is array comprising Patient type?", ()=> {

            // Arrange
            let newHospitalWard = new HospitalWard();

            // Act
            
            newHospitalWard.admitPatient("fred","P001",7,12);
            newHospitalWard.admitPatient("ethel","P002",6,11);
            newHospitalWard.admitPatient("lucy","P003",3,7);

            const testPatient = newHospitalWard.Patients[0];

            // Assert
            expect(typeof(testPatient)).toEqual("object");

        }) 
    

    })
})


describe("HospitalWard", () =>{
    describe("Patients in Ward", () => {
        test("5 Patients in Ward", ()=> {

            // Arrange
            let newHospitalWard = new HospitalWard();

            // Act
            
            newHospitalWard.admitPatient("fred","P001",7,12);
            newHospitalWard.admitPatient("ethel","P002",6,11);
            newHospitalWard.admitPatient("lucy","P003",3,7);
        
            // Assert
            expect(newHospitalWard.Patients.length).toEqual(3);

        }) 
    

    })
})
