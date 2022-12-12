import "./App.css";
import TodoItem from "./components/TodoItem.js";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

function App() {
  const todos = [
    { id: 1, title: "React lernen", isDone: false },
    { id: 2, title: "Kochen", isDone: false },
    { id: 3, title: "Staubsaugen", isDone: false },
    { id: 4, title: "Boden wischen", isDone: false },
    { id: 5, title: "Lesen", isDone: false },
  ];

  //State um die eingegebenen Todos in der (blauen) Liste zu sehen:
  const [todoList, setTodoList] = useState(todos);

  function toggleItem(todoId) {
    const updatedTodos = todoList.map((item) => {
      if (item.id === todoId) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodoList(updatedTodos);
  }

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
            isChecked={todo.isDone}
            onToggleItem={toggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
