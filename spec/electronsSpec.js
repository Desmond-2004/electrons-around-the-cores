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
});

