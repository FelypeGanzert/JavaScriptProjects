const formNew = document.querySelector('#formNew');
const inputNewTask = document.querySelector('#inNewTask');
const inputFilter = document.querySelector('#filter')
const btnAdd = document.querySelector('#btnAdd');
const btnClear = document.querySelector('#btnClear');
const ulTasks = document.querySelector('ul.collection');

//Here we will lock if has some task in the local storage 
if (localStorage.getItem('tasks') !== null) {
    const tasksStorage = JSON.parse(localStorage.getItem('tasks'));
    tasksStorage.forEach(function (t, index) {
        //By default the ulTasks will come empty, so we can just add the li
        ulTasks.innerHTML += t;
    });
};

//Events Listeners
formNew.addEventListener('submit', addTask);

btnClear.addEventListener('click', function (e) {
    listItems = document.querySelectorAll('ul li');
    if (listItems.length > 0) {
        if (confirm('Are you sure about delete every task?')) {
            //The way that I do            
            //for (let i = 0; i < listItems.length; i++) {
            //    listItems[i].remove();
            //}

            //Another possible way
            //ulTasks.innerHTML = '';

            //The way more faster
            while(ulTasks.firstChild){
                ulTasks.removeChild(ulTasks.firstChild);
            }
            updateLocalStorage();
        }
    }
});

ulTasks.addEventListener('click', clickUlCollection);

inputFilter.addEventListener('keyup', filterTasks);
//End of Events Listeners

//Functions

function addTask(e) {
    e.preventDefault(); //Previne o comportamento padrão
    //Create the elements needed to li
    if (inputNewTask.value.length > 0) {
        //Create li
        let newLi = document.createElement('li');
        //Create and append node text to li
        newLi.appendChild(document.createTextNode(inputNewTask.value));
        newLi.className = 'on';
        //Create the button x to delete the task
        let xDelete = document.createElement('a');
        xDelete.setAttribute('href', '#');
        xDelete.className = 'delete-item';
        xDelete.textContent = 'X';
        //Insert the elements
        newLi.appendChild(xDelete);
        ulTasks.appendChild(newLi);
        //Remove the text on the form and focus its
        inputNewTask.value = '';
        inputNewTask.focus();
        //update the local storage with the function
        updateLocalStorage();
    } else {
        alert('Insert one task');
    }
};


function clickUlCollection(e) {
    if (e.target.className == 'delete-item') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.remove();
        }
    }
    if (e.target.className == 'on') {
        e.target.className = 'ok';
    } else if (e.target.className == 'ok') {
        e.target.className = 'on';
    }
    updateLocalStorage();
};

function updateLocalStorage() {
    //Take the li from ul, if exists an ul
    let liTasks = document.querySelectorAll('ul li');
    if (liTasks.length >= 0) {
        let tasks = [] //variable to set in cache
        liTasks.forEach(function (li, index) {
            tasks.push('<li>' + li.innerHTML + '</li>');
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        //JSON.stringify will turn the string in an array
    }

};

function filterTasks(e){
    let txtFilter = e.target.value.toLowerCase();
    let lis = document.querySelectorAll('li');
    lis.forEach(function(l){
        let txtLi = l.firstChild.textContent.toLowerCase();
        if(txtLi.indexOf(txtFilter) != -1){
            l.style.display = 'block';
        } else{
            l.style.display = 'none';
        }
    })
};