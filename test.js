var tape = require('tape');
var logic = require('./logic');

tape('deleteTodo test', function (t) {
    let testArray = [
        {
            id: 0,
            description: 'smash avocados',
            done: true,
        },
        {
            id: 1,
            description: 'make coffee',
            done: false,
        }
    ];
    let result = [
        {
            id: 1,
            description: 'make coffee',
            done: false,
        },
    ];
    t.deepEqual(logic.deleteTodo(testArray, 0), result, 'Results are not equal');
    t.deepEqual(logic.deleteTodo(testArray, 5), testArray, 'Should handle missing ids');

    t.end();
});

tape('markTodo test', function (t) {
    let testArray = [
        {
            id: 0,
            description: 'smash avocados',
            done: true,
        },
        {
            id: 1,
            description: 'make coffee',
            done: false,
        }
    ];
    let result = [
        {
            id: 0,
            description: 'smash avocados',
            done: false,
        },
        {
            id: 1,
            description: 'make coffee',
            done: false,
        }
    ];
    t.deepEqual(logic.markTodo(testArray, 0), result, 'Todo done is not toggeled');
    t.deepEqual(logic.markTodo(testArray, 5), testArray, 'Should handle missing ids');

    t.end();
});

tape(' Add New toDo to Todos List ', function(t) {
    let notes = [];
    notes = logic.addTodo(notes, "Note text");
    let result = [
        {
            id: 1,
            description: 'Note text',
            done: false,
        },
    ];
    t.deepEqual(notes,result, "results are not equal");
    t.end();
})
