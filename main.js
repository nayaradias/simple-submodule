function onchangeText(event) {
    const button = document.querySelector('button');
    button.disabled = !event.value;
}

function deleteTask(task) {
    task.remove();
}

function createTask() {
    const tasks = document.querySelector('main');
    const input = document.getElementById('task');
    const description = input.value;
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes();
    tasks.insertAdjacentHTML('beforeend',
        `<div class="row" id="${description}" draggable="true" ondragstart="drag(event)">
        <div class="description">
            <h3>${description}</h3>
            <span>Hoje, ${time}</span>
        </div>
        <div class="action" onclick="deleteTask(${description})">
            <span class="material-symbols-outlined">delete</span>
        </div>
    </div>`);

    input.value = '';
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}