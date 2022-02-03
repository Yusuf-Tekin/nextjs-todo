

let todos = [];


const addnewTodo = (todo) => {
    if(todo !== null) {
        todos.push(todo);
    }
    else{
        return "Not added!! Todo is null";
    }
};

const deleteATodo = (todo) => {
    if(!(todo === null)) {
        todos = todos.filter(t => t.id !== todo.id);
    }
}

const getAllTodos = () => {
    return todos;
}

module.exports = {
    addnewTodo,
    deleteATodo,
    getAllTodos
}