const Janitor = require("./Janitor");

describe ("Janitor",() => {
    test(" ", ()=> {

       const  testJanitor = new Janitor();



     expect(testJanitor.isSweeping()).toEqual(false);  
    })
})
