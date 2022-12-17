function printFarmInventory(cows, chickens) {
    let cowStr = String(cows);
    while (cowStr.length < 3) {
        cowStr = "0" + cowStr;
    }
    console.log(`${cowStr} Cows`);
    let chickenStr = String(chickens);
    while (chickenStr.length < 3) {
        chickenStr = "0" + chickenStr
    }
    console.log(`${chickenStr} Chickens`);
}

printFarmInventory(7, 11);