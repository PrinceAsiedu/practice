let todoList = [];

function remember(task) {
    todoList.push(task)
}

function getTask() {
    return todoList.shift();
}

function rememberUrgently(task) {
    todoList.unshift(task); 
}

remember('Code at 12am');
rememberUrgently('Wake up at 6am');
console.log(todoList);
console.log(getTask());
console.log(getTask());
console.log(todoList);


function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove([2, 4, 5, 6, 13], ));