const Person = {
    'name': 'Prince',
    'Age': 24
}

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    }
    return "Not Found"
    // Only change code above this line
  }

console.log(checkObj(Person, 'name'));