let journal = [];

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry(["Smoke", "Work", "Touched Tree", "Ordered pizza"], false);
addEntry(["food", "brushed teeth", "lasagna", "break"], true);

console.log(journal);