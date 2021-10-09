// CRUD - Tareas
/**
 * Create
 * Read
 * Update
 * Delete
 */
// Modelar el problema
/**
 * entidad -> tarea :{
 * id:num
 * title:'string',
 * description:'string',
 * status:'boolean'
 * }
 * const task = {
  id: 0,
  title: 'tarea 1',
  description: 'esta es mi tarea',
  status: false
}
 */
// Almacenar las tareas
/**
 * Un array donde almacenaremos los objetos tarea
 */
// Objeto -> CRUD
/**
 * //=> metodos
 * Crear las tareas
 * Read -> leer mostrar
 * Update-> actualizar
 * Delete -> eliminar
 */
// const tasksDB = [];
function TaskCreator(title, description) {
  this.title = title;
  this.description = description;
  this.id = Math.floor(Math.random() * (3 - 1) + 1);
  this.status = false;
}
const taskCRUD = {
  tasksDB: [],
  createTask: function (title, description) {
    // crear la tarea
    const task = new TaskCreator(title, description)
    //almacenar la tarea
    this.tasksDB.push(task)
    //TODO: validar que si el id existe genere otro id
  },
  readTasks: function () {
    for (const task of this.tasksDB) {
      console.log(task)
    }
  },
  deleteTask: function (id) {
    // para un array de objetos eliminar un objeto especifico -> propiedad
    // cuya posicion se desconoce y devolver un nuevo
    // arreglo sin dicho objeto
    // id === task.id
    for (let index = 0; index < this.tasksDB.length; index++) {
      if (id === this.tasksDB[index].id) {
        this.tasksDB.splice(index, 1)
      }
      //TODO: implementar filter
    }
  },
  editTask: function (id) {
    /* para un arreglo de objetos, seleccionar el objeto cuyo id corresponda
      editar la propiedad status al valor contrario del que est'e
      false -> true // true -> false
      y devolver el arreglo con el elemento editado y los demas elementos sin ser
      modificados
    */
    for (let index = 0; index < this.tasksDB.length; index++) {
      if (id === this.tasksDB[index].id) {
        if (this.tasksDB[index].status === true) {
          this.tasksDB[index].status = false
        } else {
          this.tasksDB[index].status = true
        }
      }
      //TODO: implementar map
    }
  }
}

// BONUS -> commander usuario ingrese los datos por consola
