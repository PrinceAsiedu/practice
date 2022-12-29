function randomFraction() {

    // Only change code below this line
    let result = Math.random();
    if (result > 0) {
      return result;
    } else {
      randomFraction()
    }
  
    // Only change code above this line
}