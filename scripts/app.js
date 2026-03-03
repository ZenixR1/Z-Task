
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

function createTaskModal(taskName, taskDescription, taskEffort){
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

        taskAddEffortDiv = document.createElement('div');
        taskAddEffortDiv.classList.add('taskAddEffortDiv');
        taskAddEffortDiv.appendChild(taskAddEffortLabel);
        taskAddEffortDiv.appendChild(taskAddEffortInput);
        taskAddEffortDiv.appendChild(taskAddEffortSpan);

        taskAddSubmit = document.createElement('button');
        taskAddSubmit.classList.add('taskAddSubmit');
        taskAddSubmit.textContent = 'Add Task';

        taskAddCloseButton = document.createElement('button');
        taskAddCloseButton.classList.add('taskAddCloseButton');
        taskAddCloseButton.textContent = 'X';
        taskAddCloseButton.addEventListener('click', () => {
            document.body.removeChild(taskAddModalDiv);
        });

        taskAddDiv.appendChild(taskAddCloseButton);
        taskAddDiv.appendChild(taskAddNameDiv);
        taskAddDiv.appendChild(taskAddDescDiv);
        taskAddDiv.appendChild(taskAddEffortDiv);;
        taskAddDiv.appendChild(taskAddDueDateDiv)
        taskAddDiv.appendChild(taskAddSubmit);
        taskAddModal.appendChild(taskAddDiv);
        taskAddModalDiv.appendChild(taskAddModal);
        document.body.appendChild(taskAddModalDiv);

        return taskAddInput, taskAddDescInput, taskAddEffortInput, taskAddDueDateInput;
}

function createTaskItem(taskName, taskDescription, taskEffort, taskDueDate){
            taskName = taskAddInput.value.trim();
            taskDescription = taskAddDescInput.value.trim();
            taskEffort = taskAddEffortInput.value.trim();
            taskDueDate = taskAddDueDateInput.value.trim();
            if (taskName !== '') {
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
                taskItemPriority.textContent = 'High';
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
                });

                taskItem.appendChild(taskItemEffortDiv);
                taskItem.appendChild(taskItemName);
                taskItem.appendChild(taskItemDetailsDiv);
                taskItem.appendChild(taskEditButton);

                taskList.appendChild(taskItem);
            }
}

editTaskButton.addEventListener('click', () => {
    taskEditName = editTaskButton.previousElementSibling.previousElementSibling.textContent;
    taskEditEffort = editTaskButton.previousElementSibling.previousElementSibling.previousElementSibling.textContent.replace('hr', '').trim();
    console.log();
    //taskEditDesc = editTaskButton.previousElementSibling.textContent();
    createTaskModal(taskEditName,"placeholder",taskEditEffort)
});

addTaskButton.addEventListener('click', () => {
            createTaskModal();

        taskAddSubmit.addEventListener('click', (event) => {
            createTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddEffortInput.value.trim(), taskAddDueDateInput.value.trim());

            document.body.removeChild(taskAddModalDiv);
        });

});



