//Definición de la clase para representar una tarea
class Task {
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
}
//Definición de la clase que maneja la lógica, incluyendo agregar, eliminar y obtener tarea (Listar)
class TaskModel {
    constructor() {
        this.tasks = [];
        this.currentId = 0;
    }  
    addTask(title) {
        const task = new Task(this.currentId++, title);
        this.tasks.push(task);
        return task;
    }  
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }  
    getTasks() {
        return this.tasks;
    }
}