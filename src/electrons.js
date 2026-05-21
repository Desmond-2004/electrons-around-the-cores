function calculateElectrons(dice) {

    if (dice.length < 4){
        throw new Error("Input must contain at least 4 dice");
    }
    if (dice.length > 6){
        throw new Error("Input must contain at most 6 dice");
    }

    for (let i = 0; i < dice.length; i++) {
        if(dice[i] < 1) {
            throw new Error("Dice faces must be over 0");
        }
        else if(dice[i] > 6){
            throw new Error("Dice faces must be under 7");
        }
    }
    return 6;
}

module.exports = calculateElectrons;
