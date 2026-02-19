
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

addTaskButton.addEventListener('click', () => {

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

        taskAddEffortSpan = document.createElement('span');
        taskAddEffortSpan.classList.add('taskAddEffortSpan');
        taskAddEffortSpan.textContent = 'hrs';

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
        taskAddDiv.appendChild(taskAddEffortDiv);
        taskAddDiv.appendChild(taskAddSubmit);
        taskAddModal.appendChild(taskAddDiv);
        taskAddModalDiv.appendChild(taskAddModal);
        document.body.appendChild(taskAddModalDiv);

        taskAddSubmit.addEventListener('click', (event) => {
            const taskName = taskAddInput.value.trim();
            const taskEffort = taskAddEffortInput.value.trim();
            if (taskName !== '') {
                const taskItem = document.createElement('li');
                taskItem.classList.add('taskItem');
                taskItem.setAttribute('draggable', 'true');

                const taskItemEffortDiv = document.createElement('div');
                taskItemEffortDiv.classList.add('taskItemEffortDiv');
                const taskItemEffort = document.createElement('p');
                taskItemEffort.classList.add('taskItemEffort');
                taskItemEffort.textContent = `${taskEffort}hrs`;
                taskItemEffortDiv.appendChild(taskItemEffort);

                const taskItemDetailsDiv = document.createElement('div');
                taskItemDetailsDiv.classList.add('taskItemDetailsDiv');
                const taskItemName = document.createElement('h3');
                taskItemName.classList.add('taskItemName');
                taskItemName.textContent = taskName;
                const taskItemDueDate = document.createElement('p');
                taskItemDueDate.classList.add('taskItemDueDate');
                taskItemDueDate.textContent = 'Due: 05/20/25 @ 17:30';
                taskItemDetailsDiv.appendChild(taskItemName);
                taskItemDetailsDiv.appendChild(taskItemDueDate);

                const taskItemPriorityDiv = document.createElement('div');
                taskItemPriorityDiv.classList.add('taskItemPriorityDiv');
                const taskItemPriority = document.createElement('p');
                taskItemPriority.classList.add('taskItemPriority');
                taskItemPriority.textContent = 'High';
                taskItemPriorityDiv.appendChild(taskItemPriority);

                taskItem.appendChild(taskItemEffortDiv);
                taskItem.appendChild(taskItemDetailsDiv);
                taskItem.appendChild(taskItemPriorityDiv);

                taskList.appendChild(taskItem);
            }
            document.body.removeChild(taskAddModalDiv);
        });

});

/*.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        console.log('Enter key pressed');
        const taskName = taskInput.value.trim();
        const taskItem = document.createElement('li');
        taskItem.classList.add('taskItem');
        taskItem.setAttribute('draggable', 'true');

        const taskItemEffortDiv = document.createElement('div');
        taskItemEffortDiv.classList.add('taskItemEffortDiv');
        const taskItemEffort = document.createElement('p');
        taskItemEffort.classList.add('taskItemEffort');
        taskItemEffort.textContent = '3hr';
        taskItemEffortDiv.appendChild(taskItemEffort);

        const taskItemDetailsDiv = document.createElement('div');
        taskItemDetailsDiv.classList.add('taskItemDetailsDiv');
        const taskItemName = document.createElement('h3');
        taskItemName.classList.add('taskItemName');
        taskItemName.textContent = taskName;
        const taskItemDueDate = document.createElement('p');
        taskItemDueDate.classList.add('taskItemDueDate');
        taskItemDueDate.textContent = 'Due: 05/20/25 @ 17:30';
        taskItemDetailsDiv.appendChild(taskItemName);
        taskItemDetailsDiv.appendChild(taskItemDueDate);

        const taskItemPriorityDiv = document.createElement('div');
        taskItemPriorityDiv.classList.add('taskItemPriorityDiv');
        const taskItemPriority = document.createElement('p');
        taskItemPriority.classList.add('taskItemPriority');
        taskItemPriority.textContent = 'High';
        taskItemPriorityDiv.appendChild(taskItemPriority);

        taskItem.appendChild(taskItemEffortDiv);
        taskItem.appendChild(taskItemDetailsDiv);
        taskItem.appendChild(taskItemPriorityDiv);

        //taskList.appendChild(taskItem);
        taskList.replaceWith(taskItem);
    }
});*/



