const addButton = document.querySelector('#add');
const taskInput = document.querySelector('#inputTask');
const tasks = document.querySelector('#tasks');
var delButton = document.querySelector('#del-btn');


const addNewTask = function(){
    if(taskInput.value === ''){
        alert('Please Enter a Task...');
    }
    else{
        tasks.innerHTML += 
        `<div class="task">
            <span id="taskName">
            ${taskInput.value}
            </span>
            <button class="del-btn">Delete</button>
        </div>`;
    }
    var current_tasks = document.querySelectorAll('.del-btn');

    for (let i = 0; i < current_tasks.length; i++)
        {
        current_tasks[i].onclick = function()
        {
            
            this.parentNode.remove();
            
        } 
    }
    taskInput.value = '';

}

addButton.addEventListener('click',addNewTask);

