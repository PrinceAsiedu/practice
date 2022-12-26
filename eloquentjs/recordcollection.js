const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
// Broke down the freeCodeCamp instructions below 
// before i was able to find the solution.
// Remember Why You Started Prince

// let myrec = recordCollection[5439]
// myrec['tracks'] = ['Kofi Manu Ntow']
// if ('tracks' in myrec) {
//     console.log('Yes')
// } else {
//     console.log('No')
// }
// console.log(myrec)
// console.log(!myrec.hasOwnProperty('tracks'))
// myrec['tracks'].push('Gyai Gyimie')
// console.log(myrec)

  // Only change code below this line
function updateRecords(records, id, prop, value) {
if (prop != 'tracks' && value != "") {
    records[id][prop] = value;
    } else if (prop == 'tracks' && !records[id].hasOwnProperty(prop)) {
    records[id][prop] = [value];
    } else if (prop == 'tracks' && value != "") {
    records[id][prop].push(value);
    } else if (value == "") {
    delete records[id][prop]
    }
return records;
}

console.log(recordCollection[5439])
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
console.log(recordCollection[5439])

