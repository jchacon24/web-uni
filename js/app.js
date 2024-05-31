//Inicialización del programa, al cargar el documento se instancia el M-V-C 
//y se establece la comunicación entre ellos.
document.addEventListener('DOMContentLoaded', () => {
    const taskModel = new TaskModel();
    const taskView = new TaskView();
    const taskController = new TaskController(taskModel, taskView);
});