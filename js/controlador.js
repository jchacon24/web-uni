//Esta clase actúa como intermediario entre el modelo y la vista 
class TaskController {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
  
        this.vista.bindAddTask(this.handleAddTask);
        this.vista.bindDeleteTask(this.handleDeleteTask);
  
        this.updateView();
    }
    //Los metodos #1 y #2 se encargan de actualizar el modelo y vista según las acciones deñl usuario.
    //Metodo #1
    handleAddTask = (title) => {
        this.modelo.addTask(title);
        this.updateView();
    }
    //Metodo #2
    handleDeleteTask = (id) => {
        this.modelo.deleteTask(id);
        this.updateView();
    }
    //Este metodo se utiliza para actualizar la vista (mostrar los datos actuales).
    updateView() {
        this.vista.render(this.modelo.getTasks());
    }
}