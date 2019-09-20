const Doctor = require("./Doctor");
const Surgeon = require("./Surgeon");

describe ("Surgeon",() => {
    test(" ",() => {
        const testSurgeon = new Surgeon();

        expect(testSurgeon.isOperating()).toEqual(false);
        })
    })











