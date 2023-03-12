let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean litter box'];
//quit loop
while (input !== 'quit' & input !== 'q') {
    //create a todo list
    if (input === 'list') {
        console.log('*********************');
        for (let todo in todos) {
            console.log(`${todo}: ${todos[todo]}`)
        };
        console.log('*********************');
        // add one more todo
    } else if (input === 'new') {
        const newTodo = prompt('Enter new todo');
        todos.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (input === 'delete') {
        const index = prompt('Type the index of the task you want to delete')
        todos.splice(index, 1)
        console.log('todo deleted. Updated list:')
        console.log('*********************');
        for (let todo in todos) {
            console.log(`${todo}: ${todos[todo]}`)
        };
        console.log('*********************');
    }
    input = prompt('what would you like to do?')
}
console.log('Ok, quit app!')