import { nanoid } from "nanoid";
import "./TodoForm.css";

export default function TodoForm({ onAddTodo }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const inputValue = form.title.value;
    //Jetzt muss der InputValue der ein String ist ein Objekt wird
    //und in die Todo-Liste als weiteres Todo gelistet wird
    // Das machen wir mit Erstellung des Onjekts: const newTodo..
    // Die countTodos-Variable nehmen wir aus der App.js als todos.lenght

    const newTodo = { id: nanoid(), title: inputValue };

    onAddTodo(newTodo);

    form.reset();
    form.title.focus();
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">New Todo</label>
        <br />
        <input
          placeholder="Type here your todo"
          size="50"
          className="input"
          type="text"
          name="title"
          id="id"
        />
        <button className="add-button">Add</button>
      </form>
    </div>
  );
}
