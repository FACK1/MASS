var test = require('tape');
var logic = require('./logic');
var testArray = [
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

test('Example test', function (t) {
    t.pass();
    t.end();
});

test('deleteTodo test', function (t) {
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

// Do addTodo tests here



// end addTodo tests here

// Do markTodo tests here




// end markTodo tests here

// Do deleteTodo tests here




// end deleteTodo tests
