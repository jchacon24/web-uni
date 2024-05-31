//Esta clase se encarga de la presentación de la aplicación.
class TaskView {
    constructor() {
        this.taskList = document.getElementById('task-list');
        this.newTaskInput = document.getElementById('new-task');
        this.addTaskButton = document.getElementById('add-task-button');
    }
    //Los siguientes metodos se utilizan para actualizar la interfaz y manejar eventos de usuarios.
    //Metodo #1  
    render(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            li.innerHTML = `
            ${task.title}
            <button class="btn btn-danger btn-sm delete-task" data-id="${task.id}">Eliminar</button>`;
            this.taskList.appendChild(li);
        });
    }
    //Metodo #2
    bindAddTask(handler) {
        this.addTaskButton.addEventListener('click', () => {
            if (this.newTaskInput.value.trim() !== '') {
                handler(this.newTaskInput.value.trim());
                this.newTaskInput.value = '';
            }
        });
    }
    //Metodo #3
    bindDeleteTask(handler) {
        this.taskList.addEventListener('click', event => {
            if (event.target.classList.contains('delete-task')) {
                const id = parseInt(event.target.getAttribute('data-id'));
                handler(id);
            }
        });
    }
}