function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a == null || typeof a!= "object" || 
        b == null || typeof b != "object" ) return false;
    
    let keysA = Object.keys(a), keysB = Object.keys(b);
    
    if (keysA.length != keysB.length) return false

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
    
}

a = {
    name: 'Prince',
    age: '24'
};

b = {
    name: 'Abigail',
    age: '19'
}

console.log(deepEqual(a, b));
console.log(deepEqual(a, a));