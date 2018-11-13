// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
        var idCounter = 0;

        function incrementCounter() {
            return ++idCounter;
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
        return JSON.parse(JSON.stringify(todos));
    },

    addTodo: function(todos, newTodo) {
        // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
        // returns a new array, it should contain todos with the newTodo added to the end.
        // add an id to the newTodo. You can use the generateId function to create an id.
        // hint: array.concat
        let obj ={
            id: this.generateId(),
            description: newTodo,
            done: false,
        };
        let final = this.cloneArrayOfObjects(todos);
        final.push(obj);
        return final;
    },
    deleteTodo: function(todos, idToDelete) {
        return this.cloneArrayOfObjects(todos).filter(x=>x.id !== idToDelete);
    },
    markTodo: function(todos, idToMark) {
        return this.cloneArrayOfObjects(todos).map(x=>{
            if(x.id === idToMark){
                x.done = !x.done;
            }
            return x;
        });

    },
    sortTodos: function(todos, sortFunction) {
        // stretch goal! Do this last
        // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
        // sortFunction will have same signature as the sort function in array.sort
        // hint: array.slice, array.sort
    },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}