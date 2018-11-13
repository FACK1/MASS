var tape = require('tape');
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

var testArr=[
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];

tape('Example test', function (t) {
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

test('markTodo test', function (t) {
    let result = testArray = [
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

// Do addTodo tests here
tape(' Add New toDo to Todos List ', function(t) {
	var obj=  {
    id: 2,
    description: ' avocados',
    done: false,
  };
    t.deepEqual(logic.addTodo(testArr, obj), [
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
  {
    id: 2,
    description: ' avocados',
    done: false,
  }
],
      "should returns array with a new todo appended");
      t.end();
})



// end addTodo tests here

// Do markTodo tests here




// end markTodo tests here

// Do deleteTodo tests here




// end deleteTodo tests
