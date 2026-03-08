
//DOM for minutes
const timerCount = document.getElementById('timerCount');
//DOM for start/stop button
const timerToggle = document.getElementById('countdown');
//DOM for the pomodoro timer container
const timerDiv = document.querySelector('.timerDiv');
//DOM for the add Task button
const addTaskButton = document.getElementById('addTaskButton');
//DOM for the TaskList container
const taskList = document.querySelector('.taskList');
//DOM for the EditTaskButton
const editTaskButton = document.querySelector('.editTaskButton');

//function for the pomodoro timer

let duration;
duration = 1;
let breakDuration;
breakDuration = 5;
let timerStatus = 0; //0 = stopped, 1 = running, 2 = break
timerCount.innerHTML = `${duration}:00`;



function timer (durationInMinutes) {
    return setInterval (() => {
        timerStatus = 1;
        
        const currentDate = new Date().getTime();
        const distance = durationInMinutes - currentDate;

        let minutes = Math.floor(distance/1000/60) % 60;
        let seconds = Math.floor(distance/1000) % 60;

        //console.log(minutes + ":" + seconds);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        timerCount.innerHTML = minutes + ':' + seconds

        if (distance < 0){
            clearInterval(timerID);
            timerCount.innerHTML = `0${breakDuration}:00`;
            timerID = null;
            timerToggle.textContent = "Start";
            timerStatus = 2;
        }
    },1000);
};

//Event listener for timerToggle
let timerID = null;
let isPaused = false;
let pausedTime = "";

timerToggle.addEventListener('click', () => {
    
    if (timerID == null && timerStatus == 0 && timerToggle.textContent === "Start"){
        const durationMS = new Date().getTime() + (duration * 60 * 1000);
        timerID = timer(durationMS);
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
        timerToggle.textContent = "Stop"
    } else if(timerID == null && timerStatus == 2 && timerToggle.textContent === "Start"){
        const breakDurationMS = new Date().getTime() + (breakDuration * 60 * 1000);
        timerID = timer(breakDurationMS);
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
        timerToggle.textContent = "Stop";
        timerStatus = 0;
    }else if (timerID != null && timerToggle.textContent === "Stop"){
        isPaused = true;
        pausedTime = timerCount.innerHTML;
        clearInterval(timerID);
        timerID = null;
        timerDiv.style.boxShadow = "none";
        timerToggle.textContent = "Resume";
    } else if (timerID == null && timerToggle.textContent === "Resume"){
        isPaused = false;
        const timeParts = pausedTime.split(':');
        const minutesLeft = parseInt(timeParts[0]);
        const secondsLeft = parseInt(timeParts[1]);
        const durationMS = new Date().getTime() + (minutesLeft * 60 * 1000) + (secondsLeft * 1000);
        timerID = timer(durationMS);
        timerToggle.textContent = "Stop";
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
    }
});

function createTaskModal(taskName, taskDescription, taskDueDate, taskEffort, taskPriority, taskIndex) {
        taskAddModalDiv = document.createElement('div');
        taskAddModalDiv.classList.add('taskAddModalDiv');

        taskAddModal = document.createElement('div');
        taskAddModal.classList.add('taskAddModal');

        taskAddDiv = document.createElement('div');
        taskAddDiv.classList.add('taskAddDiv');

        taskAddLabel = document.createElement('h2');
        taskAddLabel.classList.add('taskAddLabel');
        taskAddLabel.textContent = 'Task Name:';

        taskAddInput = document.createElement('input');
        taskAddInput.classList.add('taskAddInput');
        taskAddInput.setAttribute('placeholder', 'Add Task Name Here');
        if (taskName !== undefined) {
            taskAddInput.value = taskName;
        }

        taskAddNameDiv = document.createElement('div');
        taskAddNameDiv.classList.add('taskAddNameDiv');
        taskAddNameDiv.appendChild(taskAddLabel);
        taskAddNameDiv.appendChild(taskAddInput);

        taskAddDescLabel = document.createElement('h2');
        taskAddDescLabel.classList.add('taskAddDescLabel');
        taskAddDescLabel.textContent = 'Task Description:';

        taskAddDescInput = document.createElement('input');
        taskAddDescInput.classList.add('taskAddDescInput');
        taskAddDescInput.setAttribute('placeholder', 'Add Task Description Here');
        if (taskDescription !== undefined) {
            taskAddDescInput.value = taskDescription;
        }

        taskAddDescDiv = document.createElement('div');
        taskAddDescDiv.classList.add('taskAddDescDiv');
        taskAddDescDiv.appendChild(taskAddDescLabel);
        taskAddDescDiv.appendChild(taskAddDescInput);

        taskAddEffortLabel = document.createElement('h2');
        taskAddEffortLabel.classList.add('taskAddEffortLabel');
        taskAddEffortLabel.textContent = 'Task Effort:';

        taskAddDueDateLabel = document.createElement('h2');
        taskAddDueDateLabel.classList.add('taskAddDueDateLabel');
        taskAddDueDateLabel.textContent = 'Task Due Date:';

        taskAddDueDateInput = document.createElement('input');
        taskAddDueDateInput.setAttribute('type', 'datetime-local');
        taskAddDueDateInput.classList.add('taskAddDueDateInput');
        if (taskDueDate !== undefined) {
            taskAddDueDateInput.value = taskDueDate;
        }

        taskAddDueDateDiv = document.createElement('div');
        taskAddDueDateDiv.classList.add('taskAddDueDateDiv');
        taskAddDueDateDiv.appendChild(taskAddDueDateLabel);
        taskAddDueDateDiv.appendChild(taskAddDueDateInput);

        taskAddEffortInput = document.createElement('input');
        taskAddEffortInput.setAttribute('type', 'number');
        taskAddEffortInput.setAttribute('min', '0');
        taskAddEffortInput.setAttribute('step', '0.25');
        taskAddEffortInput.setAttribute('max', '72');
        taskAddEffortInput.setAttribute('value', '1');
        taskAddEffortInput.classList.add('taskAddEffortInput');
        taskAddEffortInput.setAttribute('placeholder', 'x Hrs');
        if (taskEffort !== undefined) {
            taskAddEffortInput.value = taskEffort;
        }

        taskAddEffortSpan = document.createElement('span');
        taskAddEffortSpan.classList.add('taskAddEffortSpan');
        taskAddEffortSpan.textContent = 'hrs';

        taskAddEffortDiv = document.createElement('div');
        taskAddEffortDiv.classList.add('taskAddEffortDiv');
        taskAddEffortDiv.appendChild(taskAddEffortLabel);
        taskAddEffortDiv.appendChild(taskAddEffortInput);
        taskAddEffortDiv.appendChild(taskAddEffortSpan);

        taskAddPrioirityLabel = document.createElement('h2');
        taskAddPrioirityLabel.classList.add('taskAddPriorityLabel');
        taskAddPrioirityLabel.textContent = 'Task Priority:';

        taskAddPrioritySelect = document.createElement('select');
        taskAddPrioritySelect.classList.add('taskAddPrioritySelect');
        const priorityOptions = ['Low', 'Medium', 'High'];
        priorityOptions.forEach(priority => {
            const option = document.createElement('option');
            const optionColors = ['.green', '.yellow', '.red'];
            option.classList.add(optionColors[priorityOptions.indexOf(priority)]);
            option.value = priority;
            option.textContent = priority;
            taskAddPrioritySelect.appendChild(option);
        });
        if (taskPriority !== undefined) {
            taskAddPrioritySelect.value = taskPriority;
        }

        taskAddPrioirityDiv = document.createElement('div');
        taskAddPrioirityDiv.classList.add('taskAddPriorityDiv');
        taskAddPrioirityDiv.appendChild(taskAddPrioirityLabel);
        taskAddPrioirityDiv.appendChild(taskAddPrioritySelect);

        taskAddSubmit = document.createElement('button');
        taskAddSubmit.classList.add('taskAddSubmit');
        taskAddSubmit.textContent = 'Add Task';
        if (taskName !== undefined) {
            taskAddSubmit.textContent = 'Save Changes';
            taskAddSubmit.style.width = 'max-content';
        } else {
            taskAddSubmit.textContent = 'Add Task';
        }
        if (taskIndex !== undefined) {
            taskAddSubmit.addEventListener('click', (event) => {
                createTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddDueDateInput.value.trim(), taskAddEffortInput.value.trim(), taskAddPrioritySelect.value,taskAddSubmit.previousElementSibling.getAttribute('index'));
                document.body.removeChild(taskAddModalDiv);
            });
        }else {
            taskAddSubmit.addEventListener('click', (event) => {
                createTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddDueDateInput.value.trim(), taskAddEffortInput.value.trim(), taskAddPrioritySelect.value);
                document.body.removeChild(taskAddModalDiv);
            });
        }

        taskAddCloseButton = document.createElement('button');
        taskAddCloseButton.classList.add('taskAddCloseButton');
        taskAddCloseButton.textContent = 'X';
        taskAddCloseButton.addEventListener('click', () => {
            document.body.removeChild(taskAddModalDiv);
        });

        taskAddDiv.appendChild(taskAddCloseButton);
        taskAddDiv.appendChild(taskAddNameDiv);
        taskAddDiv.appendChild(taskAddDescDiv);
        taskAddDiv.appendChild(taskAddDueDateDiv);
        taskAddDiv.appendChild(taskAddEffortDiv);
        taskAddDiv.appendChild(taskAddPrioirityDiv);
        taskAddDiv.appendChild(taskAddSubmit);
        taskAddModal.appendChild(taskAddDiv);
        taskAddModalDiv.appendChild(taskAddModal);
        document.body.appendChild(taskAddModalDiv);

        return taskAddInput, taskAddDescInput, taskAddEffortInput, taskAddDueDateInput, taskAddPrioritySelect;
}

function createTaskItem(taskName, taskDescription, taskDueDate, taskEffort, taskPriority, taskIndex) {
    if (taskName === String) {
        taskName = taskName.trim();
    }
    taskDescription = taskAddDescInput.value.trim();
    taskEffort = taskAddEffortInput.value.trim();
    taskDueDate = taskAddDueDateInput.value.trim();
    taskPriority = taskAddPrioritySelect.value;
    //console.log(taskIndex);
    if (taskName !== '' && taskIndex === undefined) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        taskItem.setAttribute('draggable', 'true');

        const taskItemEffortDiv = document.createElement('div');
        taskItemEffortDiv.classList.add('taskItemEffortDiv');

        const taskItemEffort = document.createElement('p');
        taskItemEffort.classList.add('taskItemEffort');
        taskItemEffort.textContent = `${taskEffort}hr`;
        taskItemEffortDiv.appendChild(taskItemEffort);

        const taskItemName = document.createElement('h3');
        taskItemName.classList.add('taskItemName');
        taskItemName.textContent = taskName;

        const taskItemDetailsDiv = document.createElement('div');
        taskItemDetailsDiv.classList.add('taskItemDetailsDiv');

        const taskItemPriorityDiv = document.createElement('div');
        taskItemPriorityDiv.classList.add('taskItemPriorityDiv');
        const taskItemPriority = document.createElement('p');
        taskItemPriority.classList.add('taskItemPriority');
        taskItemPriority.textContent = taskPriority;
        taskItemPriorityDiv.style.backgroundColor =  taskPriority === 'Low' ? 'var(--low-priority)' : taskPriority === 'Medium' ? 'var(--normal-priority)' : 'var(--high-priority)';
        taskItemPriorityDiv.appendChild(taskItemPriority);

        const taskItemDueDate = document.createElement('p');
        taskItemDueDate.classList.add('taskItemDueDate');
        taskItemDueDate.textContent = `Due: ${taskDueDate}`;
        
        taskItemDetailsDiv.appendChild(taskItemPriorityDiv);
        taskItemDetailsDiv.appendChild(taskItemDueDate);

        const taskEditButton = document.createElement('button');
        taskEditButton.classList.add('editTaskButton');
        taskEditButtonIcon = document.createElement('i');
        taskEditButtonIcon.classList.add('fa-solid', 'fa-pen-to-square', 'editIcon');
        taskEditButton.appendChild(taskEditButtonIcon);
        taskEditButton.addEventListener('click', () => {
            taskEditName = taskItemName.textContent;
            taskEditEffort = taskItemEffort.textContent.replace('hr', '').trim();
            taskEditDueDate = taskItemDueDate.textContent.replace('Due: ', '').trim();
            //taskEditDesc = editTaskButton.previousElementSibling.textContent();
            createTaskModal(taskEditName, taskDescription, taskEditEffort, taskEditDueDate);
            indexTasks();
        });
        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('deleteTaskButton');
        taskDeleteButtonIcon = document.createElement('i');
        taskDeleteButtonIcon.classList.add('fa-solid', 'fa-trash-can', 'deleteIcon');
        taskDeleteButton.appendChild(taskDeleteButtonIcon);
        taskDeleteButton.addEventListener('click', () => {
            deleteTaskItemModal(taskItem);
        });

        taskItem.appendChild(taskItemEffortDiv);
        taskItem.appendChild(taskItemName);
        taskItem.appendChild(taskItemDetailsDiv);
        taskItem.appendChild(taskEditButton);
        taskItem.appendChild(taskDeleteButton);

        taskList.appendChild(taskItem);

        //save description to local storage with task name as key and description as value
        localStorage.setItem(taskName, taskDescription);
    } else if (taskName !== '' && taskIndex !== undefined) {
        const taskItems = document.querySelectorAll('li.taskItem');
        const taskItem = taskItems[taskIndex];
        console.log(taskItem);
        const taskItemEffort = taskItem.querySelector('.taskItemEffort');
        const taskItemName = taskItem.querySelector('.taskItemName');
        const taskItemDueDate = taskItem.querySelector('.taskItemDueDate');
        const taskItemPriority = taskItem.querySelector('.taskItemPriority');
        taskItemEffort.textContent = `${taskEffort}hr`;
        taskItemName.textContent = taskName;
        taskItemDueDate.textContent = `Due: ${taskDueDate}`;
        taskItemPriority.textContent = taskPriority;
        const taskItemPriorityDiv = taskItem.querySelector('.taskItemPriorityDiv');
        taskItemPriorityDiv.style.backgroundColor =  taskPriority === 'Low' ? 'var(--low-priority)' : taskPriority === 'Medium' ? 'var(--normal-priority)' : 'var(--high-priority)';
    }
    indexTasks();
}

editTaskButton.addEventListener('click', () => {
    //console.log(editTaskButton.previousElementSibling)
    taskEditName = editTaskButton.previousElementSibling.previousElementSibling.textContent;
    taskEditDescription = editTaskButton.previousElementSibling.textContent.trim();
    taskEditDueDate = editTaskButton.previousElementSibling.querySelector('.taskItemDueDate').textContent.replace('Due: ', '').trim();
    taskEditEffort = editTaskButton.previousElementSibling.previousElementSibling.previousElementSibling.textContent.replace('hr', '').trim();
    taskEditPriority = editTaskButton.previousElementSibling.querySelector('.taskItemPriority').textContent;
    const taskIndex = editTaskButton.closest('li.taskItem').getAttribute('index');
    //console.log(taskIndex);

    createTaskModal(taskEditName,taskEditDescription,taskEditDueDate, taskEditEffort, taskEditPriority, taskIndex);
    
    createTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddDueDateInput.value.trim(), taskAddEffortInput.value.trim(), taskAddPrioritySelect.value.trim(), taskIndex);
});

addTaskButton.addEventListener('click', () => {
    // indexTasks();
    createTaskModal();

});

function deleteTaskItemModal(taskItem){
    const deleteModalDiv = document.createElement('div');
    deleteModalDiv.classList.add('deleteModalDiv');

    const deleteModal = document.createElement('div');
    deleteModal.classList.add('deleteModal');

    const deleteMessage = document.createElement('p');
    deleteMessage.classList.add('deleteMessage');
    deleteMessage.textContent = 'Are you sure you want to delete this task?';

    const deleteConfirmButton = document.createElement('button');
    deleteConfirmButton.classList.add('deleteConfirmButton');
    deleteConfirmButton.textContent = 'Yes';
    deleteConfirmButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
        document.body.removeChild(deleteModalDiv);
        indexTasks();
    });

    const deleteCancelButton = document.createElement('button');
    deleteCancelButton.classList.add('deleteCancelButton');
    deleteCancelButton.textContent = 'No';
    deleteCancelButton.addEventListener('click', () => {
        document.body.removeChild(deleteModalDiv);
    });

    deleteModal.appendChild(deleteMessage);
    deleteModal.appendChild(deleteConfirmButton);
    deleteModal.appendChild(deleteCancelButton);
    deleteModalDiv.appendChild(deleteModal);
    document.body.appendChild(deleteModalDiv);
}

function taskItemDragAndDrop(){
    const taskItems = document.querySelectorAll('li.taskItem');

    taskItems.forEach(taskItem => {
        taskItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.getAttribute('index'));
        });
    });

    taskList.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    taskList.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedIndex = e.dataTransfer.getData('text/plain');
        const target = e.target.closest('li.taskItem');
        if (target && target.getAttribute('index') !== draggedIndex) {
            const draggedItem = document.querySelector(`li.taskItem[index='${draggedIndex}']`);
            const targetIndex = target.getAttribute('index');
            if (draggedItem && targetIndex !== null) {
                if (draggedIndex < targetIndex) {
                    target.insertAdjacentElement('afterend', draggedItem);
                } else {
                    target.insertAdjacentElement('beforebegin', draggedItem);
                }
                indexTasks();
            }
        }
    });
}

function indexTasks(){
    const taskItems = document.querySelectorAll('li.taskItem');
    //console.log(taskItems);

    for(let j = 0; j < taskItems.length; j++){
        if (taskItems[j].getAttribute('index') != undefined){
            taskItems[j].removeAttribute('index');
            taskItems[j].setAttribute('index', j);
        } else {
            taskItems[j].setAttribute('index', j);
        }
    }
    taskItemDragAndDrop();
    //update local storage with all task names, descriptions, due dates, efforts, and priorities based on current order of task items
    taskItems.forEach(taskItem => {
        const taskName = taskItem.querySelector('.taskItemName').textContent;
        const taskDescription = localStorage.getItem(taskName);
        const taskDueDate = taskItem.querySelector('.taskItemDueDate').textContent.replace('Due: ', '').trim();
        const taskEffort = taskItem.querySelector('.taskItemEffort').textContent.replace('hr', '').trim();
        const taskPriority = taskItem.querySelector('.taskItemPriority').textContent.trim();
        localStorage.setItem(taskName, JSON.stringify({description: taskDescription, dueDate: taskDueDate, effort: taskEffort, priority: taskPriority}));
    });
}

function loadTasks(){
    for (let i = 0; i < localStorage.length; i++){
        console.log(localStorage.key(i));
        const taskName = localStorage.key(i);
        const taskData = JSON.parse(localStorage.getItem(taskName));
        if (taskData && taskData.description && taskData.dueDate && taskData.effort && taskData.priority) {
            createTaskItem(taskName, taskData.description, taskData.dueDate, taskData.effort, taskData.priority);
        }
    }
}

loadTasks();


