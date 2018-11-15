// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
// var logic = require('./logic');
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
    // var noteTemplate = document.getElementById('note-template').innerHTML;
    var state = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
    ]; // this is our initial todoList

    // This function takes a to-do, it returns the DOM node representing that todo
    var createTodoNode = function(todo) {
        var todoNode = document.createElement('div');
        todoNode.setAttribute('class', 'task');
        //start add sec1:
        var leftDiv = document.createElement('div');
        leftDiv.setAttribute('class', 'sec1');
        var checkedButton = document.createElement('i');
        checkedButton.setAttribute('class', todo.done ? 'fas fa-check-circle' : 'far fa-circle btn-done');
        leftDiv.appendChild(checkedButton);
        var taskTitle = document.createElement('h2');
        taskTitle.setAttribute('class', 'view-task');
        taskTitle.innerText = todo.description;
        leftDiv.appendChild(taskTitle);
        todoNode.appendChild(leftDiv);
        //End add sec1.
        //sec2 start:
        var rightDiv = document.createElement('div');
        rightDiv.setAttribute('class', 'sec2');
        var editButton = document.createElement('button');
        editButton.setAttribute('name', 'editbutton');
        var editSign = document.createElement('i');
        editSign.setAttribute('class', 'fas fa-pencil-alt edit btn-edit');
        editButton.appendChild(editSign);
        rightDiv.appendChild(editButton);
        var deleteButton = document.createElement('button');
        deleteButton.setAttribute('name', 'deletebutton');
        var deleteSign = document.createElement('i');
        deleteSign.setAttribute('class', 'fas fa-trash-alt delete btn-delete');
        deleteButton.appendChild(deleteSign);
        rightDiv.appendChild(deleteButton);
        todoNode.appendChild(rightDiv);
        //sec2 end

        // this adds the delete button
        deleteButton.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        // add markTodo button
        checkedButton.addEventListener('click', event => {
            var index = getNodeIndex(checkedButton);
            var newState = state.concat([]);
            newState[index].done = !newState[index].done;
            update(newState);
        });

        editButton.addEventListener('click', event =>{
            if(taskTitle.getAttribute('contenteditable') == 'true'){
                var index = getNodeIndex(editButton);
                var newState = state.concat([]);
                newState[index].description = taskTitle.innerText;
                update(newState);
            }
            else {
                taskTitle.setAttribute('contenteditable', 'true');
                taskTitle.style.backgroundColor = '#9a314d';
                taskTitle.style.color = 'white';
                taskTitle.focus();
            }
        });


        return todoNode;
    };

    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
             var newToDo = document.getElementById("todo-text").value;
            var description = '?';
            update(todoFunctions.addTodo(state, newToDo));
            addTodoForm.reset();
        });
    }

    var update = function(newState) {
        state = newState;
        renderState(state);
    };

    // you do not need to change this function
    var renderState = function(state) {
        var todoListNode = document.createElement('div');
        todoListNode.setAttribute('id', 'list-container');

        state.forEach(function(todo) {
            console.log(createTodoNode(todo));
            todoListNode.appendChild(createTodoNode(todo));
        });

        // you may want to add a class for css
        container.replaceChild(todoListNode, container.firstChild);
    };


    var getNodeIndex = function (sec1i) {
        var parent = sec1i.parentNode.parentNode.parentNode;
        var children = parent.childNodes;
        for (var i=0; i < children.length ; i++){
            if(children[i] === sec1i.parentNode.parentNode){
                return i;
            }
        }
    };

    document.getElementById('sort-btn').addEventListener('click', target =>{
        //var sortedState = state.concat([]);
        var sortedState;
        if(target.style.backgroundColor === '#9a314d'){
            sortedState = todoFunctions.sortTodos(state, 'asc');
            document.getElementById("sort-btn").style.backgroundColor = 'gray';
        }else {
            sortedState = todoFunctions.sortTodos(state, 'desc');
            document.getElementById("sort-btn").style.backgroundColor = "#9a314d";
        }
        update(sortedState);
    });


    if (container) renderState(state);
})();

