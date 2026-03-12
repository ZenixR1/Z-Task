//initilize app HTML
function init() {
    var root = document.getElementById('root');
    var navBarDiv = document.createElement('div');
    navBarDiv.classList.add('navBar');
    root.appendChild(navBarDiv);
    var headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    navBarDiv.appendChild(headerDiv);
    var headerH2 = document.createElement('h2');
    headerH2.textContent = "Zen Task & Timer";
    headerDiv.appendChild(headerH2);
    var loginDivDiv = document.createElement('div');
    loginDivDiv.classList.add('loginDiv');
    headerDiv.appendChild(loginDivDiv);
    var mainContainerDiv = document.createElement('div');
    mainContainerDiv.classList.add('mainContainer');
    root.appendChild(mainContainerDiv);
    var welcomeAndTimerDivDiv = document.createElement('div');
    welcomeAndTimerDivDiv.classList.add('welcomeAndTimerDiv');
    mainContainerDiv.appendChild(welcomeAndTimerDivDiv);
    var welcomeHeaderDivDiv = document.createElement('div');
    welcomeHeaderDivDiv.classList.add('welcomeHeaderDiv');
    welcomeAndTimerDivDiv.appendChild(welcomeHeaderDivDiv);
    var welcomeHeaderH1 = document.createElement('h1');
    welcomeHeaderH1.classList.add('welcomeHeader');
    welcomeHeaderH1.textContent = 'Welcome, {Username}!';
    welcomeHeaderDivDiv.appendChild(welcomeHeaderH1);
    var motdH4 = document.createElement('h4');
    motdH4.classList.add('motd');
    motdH4.textContent = "Message of the day:";
    welcomeHeaderDivDiv.appendChild(motdH4);
    var motdContentP = document.createElement('p');
    motdContentP.classList.add('motdContent');
    motdContentP.textContent = 'I hope you have a productive day!';
    welcomeHeaderDivDiv.appendChild(motdContentP);
    var timerDivDiv = document.createElement('div');
    timerDivDiv.classList.add('timerDiv');
    welcomeAndTimerDivDiv.appendChild(timerDivDiv);
    var timerDiv = document.createElement('div');
    timerDiv.classList.add('timer');
    timerDivDiv.appendChild(timerDiv);
    var timerClockDiv = document.createElement('div');
    timerClockDiv.classList.add('timerClock');
    timerDiv.appendChild(timerClockDiv);
    var timerCountH2 = document.createElement('h2');
    timerCountH2.id = "timerCount";
    timerClockDiv.appendChild(timerCountH2);
    var controlBarDiv = document.createElement('div');
    controlBarDiv.classList.add('controlBar');
    timerDiv.appendChild(controlBarDiv);
    var line1DivDiv = document.createElement('div');
    line1DivDiv.classList.add('line1div');
    line1DivDiv.innerHTML = "<hr class=\"line1\">";
    controlBarDiv.appendChild(line1DivDiv);
    var countdownButton = document.createElement('button');
    countdownButton.id = "countdown";
    countdownButton.textContent = 'Start';
    controlBarDiv.appendChild(countdownButton);
    var line2DivDiv = document.createElement('div');
    line2DivDiv.classList.add('line2div');
    line2DivDiv.innerHTML = "<hr class=\"line2\">";
    controlBarDiv.appendChild(line2DivDiv);
    var workingOnDivDiv = document.createElement('div');
    workingOnDivDiv.classList.add('workingOnDiv');
    timerDiv.appendChild(workingOnDivDiv);
    var workingOnDivDivH2 = document.createElement('h2');
    workingOnDivDivH2.textContent = "Currently Working On:";
    workingOnDivDiv.appendChild(workingOnDivDivH2);
    var taskDisplayNameP = document.createElement('p');
    taskDisplayNameP.classList.add('taskDisplayName');
    workingOnDivDiv.appendChild(taskDisplayNameP);
    var taskPriorityLevelP = document.createElement('p');
    taskPriorityLevelP.classList.add('taskPriorityLevel');
    taskPriorityLevelP.textContent = 'priorityLevel';
    workingOnDivDiv.appendChild(taskPriorityLevelP);
    var taskDueDateP = document.createElement('p');
    taskDueDateP.classList.add('taskDueDate');
    taskDueDateP.innerHTML = "<strong>Due by: </strong>May 20th, 2025 @ 17:30</p>";
    workingOnDivDiv.appendChild(taskDueDateP);
    var taskSummaryP = document.createElement('p');
    taskSummaryP.innerHTML = "<strong>Task Summary:</strong>";
    workingOnDivDiv.appendChild(taskSummaryP);
    var taskDisplaySummaryP = document.createElement('p');
    taskDisplaySummaryP.classList.add('taskDisplaySummary');
    taskDisplaySummaryP.textContent = "This section will list out your task summary.";
    workingOnDivDiv.appendChild(taskDisplaySummaryP);
    var tasksDivDiv = document.createElement('div');
    tasksDivDiv.classList.add('tasksDiv');
    mainContainerDiv.appendChild(tasksDivDiv);
    var taskHeaderDivDiv = document.createElement('div');
    taskHeaderDivDiv.classList.add('taskHeaderDiv');
    tasksDivDiv.appendChild(taskHeaderDivDiv);
    var settingsDivDiv = document.createElement('div');
    settingsDivDiv.classList.add('settingsDiv');
    taskHeaderDivDiv.appendChild(settingsDivDiv);
    var sortButtonDiv = document.createElement('div');
    sortButtonDiv.classList.add('sortButtonDiv');
    settingsDivDiv.appendChild(sortButtonDiv);
    var filterButtonDiv = document.createElement('div');
    filterButtonDiv.classList.add('filterButtonDiv');
    settingsDivDiv.appendChild(filterButtonDiv);
    var taskHeaderDiv = document.createElement('div');
    taskHeaderDiv.classList.add('taskHeader');
    taskHeaderDivDiv.appendChild(taskHeaderDiv);
    var taskHeadingH2 = document.createElement('h2');
    taskHeadingH2.classList.add('taskHeading');
    taskHeadingH2.textContent = "Tasks:";
    taskHeaderDiv.appendChild(taskHeadingH2);
    var addTaskButton = document.createElement('button');
    addTaskButton.id = 'addTaskButton';
    addTaskButton.textContent = "+";
    taskHeaderDivDiv.appendChild(addTaskButton);
    var taskContainerDiv = document.createElement('div');
    taskContainerDiv.classList.add('taskContainerDiv');
    tasksDivDiv.appendChild(taskContainerDiv);
    var taskListUL = document.createElement('ul');
    taskListUL.classList.add('taskList');
    taskContainerDiv.appendChild(taskListUL);
}
init();
//DOM for minutes
var timerCount = document.getElementById('timerCount');
//DOM for start/stop button
var timerToggle = document.getElementById('countdown');
//DOM for the pomodoro timer container
var timerDiv = document.querySelector('.timerDiv');
//DOM for the add Task button
var addTaskButton = document.getElementById('addTaskButton');
//DOM for the TaskList container
var taskList = document.querySelector('.taskList');
//DOM for the EditTaskButton
var editTaskButton = document.querySelector('.editTaskButton');
//function for the pomodoro timer
var duration;
duration = 1;
var breakDuration;
breakDuration = 5;
var timerStatus = 0; //0 = stopped, 1 = running, 2 = break
timerCount.innerHTML = "".concat(duration, ":00");
function timer(durationInMinutes) {
    return setInterval(function () {
        timerStatus = 1;
        var currentDate = new Date().getTime();
        var distance = durationInMinutes - currentDate;
        var minutes = Math.floor(distance / 1000 / 60) % 60;
        var seconds = Math.floor(distance / 1000) % 60;
        //console.log(minutes + ":" + seconds);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerCount.innerHTML = minutes + ':' + seconds;
        if (distance < 0) {
            clearInterval(timerID);
            timerCount.innerHTML = "0".concat(breakDuration, ":00");
            timerID = null;
            timerToggle.textContent = "Start";
            timerStatus = 2;
        }
    }, 1000);
}
;
//Event listener for timerToggle
var timerID = null;
var isPaused = false;
var pausedTime = "";
timerToggle.addEventListener('click', function () {
    if (timerID == null && timerStatus == 0 && timerToggle.textContent === "Start") {
        var durationMS = new Date().getTime() + (duration * 60 * 1000);
        timerID = timer(durationMS);
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
        timerToggle.textContent = "Stop";
    }
    else if (timerID == null && timerStatus == 2 && timerToggle.textContent === "Start") {
        var breakDurationMS = new Date().getTime() + (breakDuration * 60 * 1000);
        timerID = timer(breakDurationMS);
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
        timerToggle.textContent = "Stop";
        timerStatus = 0;
    }
    else if (timerID != null && timerToggle.textContent === "Stop") {
        isPaused = true;
        pausedTime = timerCount.innerHTML;
        clearInterval(timerID);
        timerID = null;
        timerDiv.style.boxShadow = "none";
        timerToggle.textContent = "Resume";
    }
    else if (timerID == null && timerToggle.textContent === "Resume") {
        isPaused = false;
        var timeParts = pausedTime.split(':');
        var minutesLeft = parseInt(timeParts[0]);
        var secondsLeft = parseInt(timeParts[1]);
        var durationMS = new Date().getTime() + (minutesLeft * 60 * 1000) + (secondsLeft * 1000);
        timerID = timer(durationMS);
        timerToggle.textContent = "Stop";
        timerDiv.style.boxShadow = "2px 2px 50px var(--yale-blue)";
    }
});
var taskAddInput, taskAddDescInput, taskAddEffortInput, taskAddDueDateInput, taskAddPrioritySelect;
function createTaskModal(taskName, taskDescription, taskDueDate, taskEffort, taskPriority, taskIndex) {
    var taskAddModalDiv = document.createElement('div');
    taskAddModalDiv.classList.add('taskAddModalDiv');
    var taskAddModal = document.createElement('div');
    taskAddModal.classList.add('taskAddModal');
    var taskAddDiv = document.createElement('div');
    taskAddDiv.classList.add('taskAddDiv');
    var taskAddLabel = document.createElement('h2');
    taskAddLabel.classList.add('taskAddLabel');
    taskAddLabel.textContent = 'Task Name:';
    taskAddInput = document.createElement('input');
    taskAddInput.classList.add('taskAddInput');
    taskAddInput.setAttribute('placeholder', 'Add Task Name Here');
    if (taskName !== undefined) {
        taskAddInput.value = taskName;
    }
    var taskAddNameDiv = document.createElement('div');
    taskAddNameDiv.classList.add('taskAddNameDiv');
    taskAddNameDiv.appendChild(taskAddLabel);
    taskAddNameDiv.appendChild(taskAddInput);
    var taskAddDescLabel = document.createElement('h2');
    taskAddDescLabel.classList.add('taskAddDescLabel');
    taskAddDescLabel.textContent = 'Task Description:';
    taskAddDescInput = document.createElement('input');
    taskAddDescInput.classList.add('taskAddDescInput');
    taskAddDescInput.setAttribute('placeholder', 'Add Task Description Here');
    if (taskDescription !== undefined) {
        taskAddDescInput.value = taskDescription;
    }
    var taskAddDescDiv = document.createElement('div');
    taskAddDescDiv.classList.add('taskAddDescDiv');
    taskAddDescDiv.appendChild(taskAddDescLabel);
    taskAddDescDiv.appendChild(taskAddDescInput);
    var taskAddEffortLabel = document.createElement('h2');
    taskAddEffortLabel.classList.add('taskAddEffortLabel');
    taskAddEffortLabel.textContent = 'Task Effort:';
    var taskAddDueDateLabel = document.createElement('h2');
    taskAddDueDateLabel.classList.add('taskAddDueDateLabel');
    taskAddDueDateLabel.textContent = 'Task Due Date:';
    taskAddDueDateInput = document.createElement('input');
    taskAddDueDateInput.setAttribute('type', 'datetime-local');
    taskAddDueDateInput.classList.add('taskAddDueDateInput');
    if (taskDueDate !== undefined) {
        taskAddDueDateInput.value = taskDueDate;
    }
    var taskAddDueDateDiv = document.createElement('div');
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
    var taskAddEffortSpan = document.createElement('span');
    taskAddEffortSpan.classList.add('taskAddEffortSpan');
    taskAddEffortSpan.textContent = 'hrs';
    var taskAddEffortDiv = document.createElement('div');
    taskAddEffortDiv.classList.add('taskAddEffortDiv');
    taskAddEffortDiv.appendChild(taskAddEffortLabel);
    taskAddEffortDiv.appendChild(taskAddEffortInput);
    taskAddEffortDiv.appendChild(taskAddEffortSpan);
    var taskAddPrioirityLabel = document.createElement('h2');
    taskAddPrioirityLabel.classList.add('taskAddPriorityLabel');
    taskAddPrioirityLabel.textContent = 'Task Priority:';
    taskAddPrioritySelect = document.createElement('select');
    taskAddPrioritySelect.classList.add('taskAddPrioritySelect');
    var priorityOptions = ['Low', 'Medium', 'High'];
    priorityOptions.forEach(function (priority) {
        var option = document.createElement('option');
        var optionColors = ['.green', '.yellow', '.red'];
        option.classList.add(optionColors[priorityOptions.indexOf(priority)]);
        option.value = priority;
        option.textContent = priority;
        taskAddPrioritySelect.appendChild(option);
    });
    if (taskPriority !== undefined) {
        taskAddPrioritySelect.value = taskPriority;
    }
    var taskAddPrioirityDiv = document.createElement('div');
    taskAddPrioirityDiv.classList.add('taskAddPriorityDiv');
    taskAddPrioirityDiv.appendChild(taskAddPrioirityLabel);
    taskAddPrioirityDiv.appendChild(taskAddPrioritySelect);
    var taskAddSubmit = document.createElement('button');
    taskAddSubmit.classList.add('taskAddSubmit');
    taskAddSubmit.textContent = 'Add Task';
    if (taskName !== undefined) {
        taskAddSubmit.textContent = 'Save Changes';
        taskAddSubmit.style.width = 'max-content';
    }
    else {
        taskAddSubmit.textContent = 'Add Task';
    }
    if (taskIndex !== undefined) {
        taskAddSubmit.addEventListener('click', function (event) {
            updateTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddDueDateInput.value.trim(), taskAddEffortInput.value.trim(), taskAddPrioritySelect.value, taskIndex);
            document.body.removeChild(taskAddModalDiv);
        });
    }
    else {
        taskAddSubmit.addEventListener('click', function (event) {
            createTaskItem(taskAddInput.value.trim(), taskAddDescInput.value.trim(), taskAddDueDateInput.value.trim(), taskAddEffortInput.value.trim(), taskAddPrioritySelect.value, undefined);
            document.body.removeChild(taskAddModalDiv);
        });
    }
    var taskAddCloseButton = document.createElement('button');
    taskAddCloseButton.classList.add('taskAddCloseButton');
    taskAddCloseButton.textContent = 'X';
    taskAddCloseButton.addEventListener('click', function () {
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
    return taskAddInput = taskAddInput, taskAddDescInput, taskAddEffortInput, taskAddDueDateInput, taskAddPrioritySelect;
}
function createTaskItem(taskName, taskDescription, taskDueDate, taskEffort, taskPriority, taskIndex) {
    //console.log('New Task Created: ' + taskName);
    taskName = taskName.trim();
    //console.log('New Task Created: ' + taskName);
    taskDescription = taskDescription.trim();
    taskDueDate = taskDueDate.trim();
    taskEffort = taskEffort.trim();
    //console.log(taskIndex);
    if (taskName !== '' && taskIndex === undefined) {
        var taskItem_1 = document.createElement('li');
        taskItem_1.classList.add('taskItem');
        taskItem_1.setAttribute('draggable', 'true');
        var taskItemEffortDiv = document.createElement('div');
        taskItemEffortDiv.classList.add('taskItemEffortDiv');
        var taskItemEffort = document.createElement('p');
        taskItemEffort.classList.add('taskItemEffort');
        taskItemEffort.textContent = "".concat(taskEffort, "hr");
        taskItemEffortDiv.appendChild(taskItemEffort);
        var taskItemName_1 = document.createElement('h3');
        taskItemName_1.classList.add('taskItemName');
        taskItemName_1.textContent = taskName;
        var taskItemDetailsDiv = document.createElement('div');
        taskItemDetailsDiv.classList.add('taskItemDetailsDiv');
        var taskItemPriorityDiv = document.createElement('div');
        taskItemPriorityDiv.classList.add('taskItemPriorityDiv');
        var taskItemPriority = document.createElement('p');
        taskItemPriority.classList.add('taskItemPriority');
        taskItemPriority.textContent = taskPriority;
        taskItemPriorityDiv.style.backgroundColor = taskPriority === 'Low' ? 'var(--low-priority)' : taskPriority === 'Medium' ? 'var(--normal-priority)' : 'var(--high-priority)';
        taskItemPriorityDiv.appendChild(taskItemPriority);
        var taskItemDueDate = document.createElement('p');
        taskItemDueDate.classList.add('taskItemDueDate');
        taskItemDueDate.textContent = "Due: ".concat(taskDueDate);
        taskItemDetailsDiv.appendChild(taskItemPriorityDiv);
        taskItemDetailsDiv.appendChild(taskItemDueDate);
        var taskEditButton = document.createElement('button');
        taskEditButton.classList.add('editTaskButton');
        var taskEditButtonIcon = document.createElement('i');
        taskEditButtonIcon.classList.add('fa-solid', 'fa-pen-to-square', 'editIcon');
        taskEditButton.appendChild(taskEditButtonIcon);
        taskEditButton.addEventListener('click', function () {
            var currentIndex = taskItem_1.getAttribute('index');
            var taskName = taskItemName_1.textContent;
            var taskDataStr = localStorage.getItem(taskName);
            var taskData = taskDataStr ? JSON.parse(taskDataStr) : null;
            if (taskData && taskData.description && taskData.dueDate && taskData.effort && taskData.priority) {
                createTaskModal(taskName, taskData.description, taskData.dueDate, taskData.effort, taskData.priority, currentIndex);
            }
        });
        var taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('deleteTaskButton');
        var taskDeleteButtonIcon = document.createElement('i');
        taskDeleteButtonIcon.classList.add('fa-solid', 'fa-trash-can', 'deleteIcon');
        taskDeleteButton.appendChild(taskDeleteButtonIcon);
        taskDeleteButton.addEventListener('click', function () {
            deleteTaskItemModal(taskItem_1, taskItemName_1.textContent);
        });
        taskItem_1.appendChild(taskItemEffortDiv);
        taskItem_1.appendChild(taskItemName_1);
        taskItem_1.appendChild(taskItemDetailsDiv);
        taskItem_1.appendChild(taskEditButton);
        taskItem_1.appendChild(taskDeleteButton);
        taskList.appendChild(taskItem_1);
        //save description to local storage with task name as key and description as value
        localStorage.setItem(taskName, JSON.stringify({ description: taskDescription, dueDate: taskDueDate, effort: taskEffort, priority: taskPriority }));
    }
    else if (taskName !== '' && taskIndex !== undefined) {
        var taskItems = document.querySelectorAll('li.taskItem');
        var taskItem = taskItems[taskIndex];
        console.log(taskItem);
        var taskItemEffort = taskItem.querySelector('.taskItemEffort');
        var taskItemName = taskItem.querySelector('.taskItemName');
        var taskItemDueDate = taskItem.querySelector('.taskItemDueDate');
        var taskItemPriority = taskItem.querySelector('.taskItemPriority');
        taskItemEffort.textContent = "".concat(taskEffort, "hr");
        taskItemName.textContent = taskName;
        taskItemDueDate.textContent = "Due: ".concat(taskDueDate);
        taskItemPriority.textContent = taskPriority;
        var taskItemPriorityDiv = taskItem.querySelector('.taskItemPriorityDiv');
        taskItemPriorityDiv.style.backgroundColor = taskPriority === 'Low' ? 'var(--low-priority)' : taskPriority === 'Medium' ? 'var(--normal-priority)' : 'var(--high-priority)';
    }
    indexTasks();
}
function updateTaskItem(taskName, taskDescription, taskDueDate, taskEffort, taskPriority, taskIndex) {
    var taskItem = document.querySelector("li.taskItem[index=\"".concat(taskIndex, "\"]"));
    console.log(taskItem);
    var taskItemEffort = taskItem.querySelector('.taskItemEffort');
    var taskItemName = taskItem.querySelector('.taskItemName');
    var taskItemDueDate = taskItem.querySelector('.taskItemDueDate');
    var taskItemPriority = taskItem.querySelector('.taskItemPriority');
    taskItemEffort.textContent = "".concat(taskEffort, "hr");
    taskItemDueDate.textContent = "Due: ".concat(taskDueDate);
    taskItemPriority.textContent = taskPriority;
    var taskItemPriorityDiv = taskItem.querySelector('.taskItemPriorityDiv');
    taskItemPriorityDiv.style.backgroundColor = taskPriority === 'Low' ? 'var(--low-priority)' : taskPriority === 'Medium' ? 'var(--normal-priority)' : 'var(--high-priority)';
    //update local storage
    if (taskName !== taskItemName.textContent) {
        taskItemName.textContent = taskName;
        var taskKey = localStorage.key(taskIndex);
        localStorage.removeItem(taskKey);
        localStorage.setItem(taskName, JSON.stringify({ description: taskDescription, dueDate: taskDueDate, effort: taskEffort, priority: taskPriority }));
    }
    else {
        localStorage.setItem(taskName, JSON.stringify({ description: taskDescription, dueDate: taskDueDate, effort: taskEffort, priority: taskPriority }));
    }
}
addTaskButton.addEventListener('click', function () {
    // indexTasks();
    createTaskModal(undefined, undefined, undefined, undefined, undefined, undefined);
});
function settingsModal() {
}
function deleteTaskItemModal(taskItem, taskName) {
    var deleteModalDiv = document.createElement('div');
    deleteModalDiv.classList.add('deleteModalDiv');
    var deleteModal = document.createElement('div');
    deleteModal.classList.add('deleteModal');
    var deleteMessage = document.createElement('p');
    deleteMessage.classList.add('deleteMessage');
    deleteMessage.textContent = 'Are you sure you want to delete this task?';
    var deleteConfirmButton = document.createElement('button');
    deleteConfirmButton.classList.add('deleteConfirmButton');
    deleteConfirmButton.textContent = 'Yes';
    deleteConfirmButton.addEventListener('click', function () {
        //remove localStorage task item
        localStorage.removeItem(taskName);
        taskList.removeChild(taskItem);
        document.body.removeChild(deleteModalDiv);
        indexTasks();
    });
    var deleteCancelButton = document.createElement('button');
    deleteCancelButton.classList.add('deleteCancelButton');
    deleteCancelButton.textContent = 'No';
    deleteCancelButton.addEventListener('click', function () {
        document.body.removeChild(deleteModalDiv);
    });
    deleteModal.appendChild(deleteMessage);
    deleteModal.appendChild(deleteConfirmButton);
    deleteModal.appendChild(deleteCancelButton);
    deleteModalDiv.appendChild(deleteModal);
    document.body.appendChild(deleteModalDiv);
}
function taskItemDragAndDrop() {
    var taskItems = document.querySelectorAll('li.taskItem');
    taskItems.forEach(function (taskItem) {
        taskItem.addEventListener('dragstart', function (e) {
            var target = e.target;
            if (e.dataTransfer) {
                e.dataTransfer.setData('text/plain', target.getAttribute('index') || '');
            }
        });
    });
    taskList.addEventListener('dragover', function (e) {
        e.preventDefault();
    });
    taskList.addEventListener('drop', function (e) {
        e.preventDefault();
        if (!e.dataTransfer)
            return;
        var draggedIndex = e.dataTransfer.getData('text/plain');
        var target = e.target.closest('li.taskItem');
        if (target && target.getAttribute('index') !== draggedIndex) {
            var draggedItem = document.querySelector("li.taskItem[index='".concat(draggedIndex, "']"));
            var targetIndex = target.getAttribute('index');
            if (draggedItem && targetIndex !== null) {
                if (parseInt(draggedIndex) < parseInt(targetIndex)) {
                    target.insertAdjacentElement('afterend', draggedItem);
                }
                else {
                    target.insertAdjacentElement('beforebegin', draggedItem);
                }
                indexTasks();
            }
        }
    });
}
function indexTasks() {
    var taskItems = document.querySelectorAll('li.taskItem');
    for (var j = 0; j < taskItems.length; j++) {
        if (taskItems[j].getAttribute('index') != undefined) {
            taskItems[j].removeAttribute('index');
            taskItems[j].setAttribute('index', "".concat(j));
        }
        else {
            taskItems[j].setAttribute('index', "".concat(j));
        }
    }
    taskItemDragAndDrop();
}
function initTasks() {
    //Load tasks from local storage
    for (var i = 0; i < localStorage.length; i++) {
        var taskName = localStorage.key(i) || null;
        var taskDataStr = localStorage.getItem(taskName);
        var taskData = taskDataStr ? JSON.parse(taskDataStr) : null;
        if (taskData && taskData.description && taskData.dueDate && taskData.effort && taskData.priority) {
            createTaskItem(taskName, taskData.description, taskData.dueDate, taskData.effort, taskData.priority, undefined);
        }
    }
}
initTasks();
