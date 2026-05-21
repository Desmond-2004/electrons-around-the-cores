const calculateElectrons = require("../src/electrons");

describe("Electron Calculator", function () {
    it("recognises arrays of 4-6 ints", function () {
        expect(function () {
            calculateElectrons([1, 2, 3]);
        }).toThrowError("Input must contain at least 4 dice");

        expect(function () {
            calculateElectrons([1, 2, 3, 4, 5, 6, 1]);
        }).toThrowError("Input must contain at most 6 dice");
    });

    it("rejects faces outside 1-6", function () {
        expect(function () {
            calculateElectrons([0, 2, 3, 4]);
        }).toThrowError("Dice faces must be over 0");

        expect(function () {
            calculateElectrons([1, 2, 3, 7]);
        }).toThrowError("Dice faces must be under 7");
    });

    it("[1, 2, 3, 4, 5] -> 6", function () {
        expect(calculateElectrons([1, 2, 3, 4, 5])).toEqual(6);
    });

});