import "./App.css";
import TodoItem from "./components/TodoItem.js";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const todos = [
    { id: 1, title: "React lernen" },
    { id: 2, title: "Kochen" },
    { id: 3, title: "Staubsaugen" },
    { id: 4, title: "Boden wischen" },
    { id: 5, title: "Lesen" },
  ];

  //State um die eingegebenen Todos in der (blauen) Liste zu sehen:
  const [todoList, setTodoList] = useState(todos);

  function addTodo(newTodo) {
    //   //Neue State: Füge das neue Todo an den Anfang der Liste
    //   // und übernehme alle bestehenden Todos
    setTodoList([newTodo, ...todoList]);
  }

  function removeTodo(id) {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  }

  return (
    <div className="App">
      <h1>My New Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.title}
            id={todo.id}
            title={todo.title}
            onRemoveTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
