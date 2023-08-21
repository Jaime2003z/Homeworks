// Defino una funcion
function createTodo(titulo, descripcion, siguienteTodo) {
    return {
      title: titulo,
      description: descripcion,
      nextTodo: siguienteTodo || null,
    };
  }
  
  // Creo algunos TODOs
  const todo1 = createTodo("Tarea 1", "Descripcion Para Tarea 1");
  const todo2 = createTodo("Tarea 2", "Descripcion Para Tarea 2");
  const todo3 = createTodo("Tarea 3", "Descripcion Para Tarea 3");
  const todo4 = createTodo("Tarea 4", "Descripcion Para Tarea 4");
  
  // Enlazo los TODOs
  todo1.nextTodo = todo2;
  todo2.nextTodo = todo3;
  todo3.nextTodo = todo4;
  
  // Funcion que imprime todos los TODOs
  function printTodos(todo) {
    let currentTodo = todo;
    while (currentTodo) {
      console.log(`Titulo: ${currentTodo.title}`);
      console.log(`Descripción: ${currentTodo.description}`);
      console.log('--------------------------');
      currentTodo = currentTodo.nextTodo;
    }
  }
  
  // Imprimo todos los TODOs empezando por el primero
  printTodos(todo1);
  