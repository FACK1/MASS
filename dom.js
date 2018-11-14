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
        var sec1 = document.createElement('div');
        sec1.setAttribute('class', 'sec1');
        var sec1i = document.createElement('i');
        sec1i.setAttribute('class', todo.done ? 'fas fa-check-circle' : 'far fa-circle btn-done');
        sec1.appendChild(sec1i);
        var sec1h = document.createElement('h2');
        sec1h.setAttribute('class', 'view-task');
        sec1h.innerText = todo.description;
        sec1.appendChild(sec1h);
        todoNode.appendChild(sec1);
        //End add sec1.
        //sec2 start:
        var sec2 = document.createElement('div');
        sec2.setAttribute('class', 'sec2');
        var sec2b1 = document.createElement('button');
        var sec2b1i = document.createElement('i');
        sec2b1i.setAttribute('class', 'fas fa-pencil-alt edit btn-edit');
        sec2b1.appendChild(sec2b1i);
        sec2.appendChild(sec2b1);
        var sec2b2 = document.createElement('button');
        var sec2b2i = document.createElement('i');
        sec2b2i.setAttribute('class', 'fas fa-trash-alt delete btn-delete');
        sec2b2.appendChild(sec2b2i);
        sec2.appendChild(sec2b2);
        todoNode.appendChild(sec2);
        //sec2 end

        /*
        if(todo.done){
            todoNode.innerHTML = "            <div class='sec1'>" +
                "               <i class='fas fa-check-circle'></i>" +
                "               <h2 class ='view-task'> " + todo.description + "</h2>" +
                "            </div>" +
                "            <div class='sec2'>" +
                "               <button><i class='fas fa-pencil-alt edit btn-edit'></i></button>" +
                "               <button><i class='fas fa-trash-alt delete btn-delete'></i></button>" +
                "            </div>";
        }else {
            todoNode.innerHTML = "            <div class='sec1'>" +
                "               <i class='far fa-circle btn-done'></i>" +
                "               <h2 class ='view-task'> " + todo.description + "</h2>" +
                "            </div>" +
                "            <div class='sec2'>" +
                "               <button><i class='fas fa-pencil-alt edit btn-edit'></i></button>" +
                "               <button><i class='fas fa-trash-alt delete btn-delete'></i></button>" +
                "            </div>";
        }
        */
        //return todoNode;
        // you will need to use addEventListener

        // add span holding description

        // this adds the delete button
        //var deleteButtonNode = document.createElement('button');
        sec2b2.addEventListener('click', function(event) {
            var newState = todoFunctions.deleteTodo(state, todo.id);
            update(newState);
        });
        //todoNode.appendChild(deleteButtonNode);

        // add markTodo button

        // add classes for css

        return todoNode;
    };

    // bind create todo form
    if (addTodoForm) {
        addTodoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // https://developer.mozilla.org/en-US/docs/Web/Events/submit
            // what does event.preventDefault do?
            // what is inside event.target?
             var newToDo = document.getElementById("todo-text").value;
             //console.log(newToDo);
            var description = '?'; // event.target ....
            //console.log(state);
            update(todoFunctions.addTodo(state, newToDo));
            //console.log(state);
            // hint: todoFunctions.addTodo
            //var newState = []; // ?? change this!
            //update(newState);
        });
    }

    // you should not need to change this function
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

    if (container) renderState(state);
})();

