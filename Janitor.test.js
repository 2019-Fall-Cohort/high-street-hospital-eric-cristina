const Janitor = require("./Janitor");
const VampireJanitor = require("./VampireJanitor");

describe ("Janitor",() => {
    test("", ()=> {

       const  testJanitor = new Janitor();



     expect(testJanitor.isSweeping()).toEqual(false);  
    })
})

describe ("VampireJanitor",() => {
    test(" ", ()=> {

       let  testVampireJanitor = new VampireJanitor();



     expect(testVampireJanitor.drawBlood()).toEqual("Yummy, blood");  
    })
})
