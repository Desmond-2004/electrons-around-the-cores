function calculateElectrons(dice) {

    if (dice.length < 4){
        throw new Error("Input must contain at least 4 dice");
    }
    if (dice.length > 6){
        throw new Error("Input must contain at most 6 dice");
    }
    return 0;
}

module.exports = calculateElectrons;
