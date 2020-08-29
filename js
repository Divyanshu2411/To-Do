//let tasks = [{ done: false, text: 'task will appear here', id: 1}];
let tasks = [];
const tasksList = document.getElementById("list");
let addTaskInputBox = document.getElementById("add-task");


function addTodo(task){
    tasks.push(task);
    renderList();
}

function deleteTodo (taskId){
    const newTasks= tasks.filter(function (task){
        return task.id !== taskId;
    });

    tasks= newTasks;
    renderList();
}

function renderList(){
    tasksList.innerHTML='';
    for(let i=0; i<tasks.length;i++)
    {
        const li=document.createElement('li');
        const task= tasks[i];

        li.innerHTML= `
        <input type="checkbox" id="${task.id}"/>
        <label for = "${task.id}"> ${task.text}</label>
        <button data-taskId="${task.id}"class="delete"> Delete </button>
        `;

        tasksList.appendChild(li);

    }

}

function checkTodo(taskID){
    const taskIndex=tasks.findIndex(function(task){
        return task.id === taskId;
    });

    tasks[taskIndex].done= !tasks[taskIndex].done;
    
}

function handleClick(event){
    if(event.target.className==='delete')
    {
        const taskid=Number(event.target.dataset.taskid);
        deleteTodo(taskid);
    }

    
}
function initialize(){
    document.addEventListener('click',handleClick);
    document.addEventListener('keyup',function(e)
    {
        const text= e.target.value;

        if(e.key === 'Enter'){
            const task={
                text : text,
                id: Date.now(),
                done: false
                
            }
            addTodo(task);
            addTaskInputBox.value='';
        }
        
    })
    renderList();

}

initialize();
