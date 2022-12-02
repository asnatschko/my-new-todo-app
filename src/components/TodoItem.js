import "./TodoItem.css";

export default function TodoItem({ id, title, onRemoveTodo }) {
  function handleClick() {
    onRemoveTodo(id);
  }

  return (
    <li>
      <label>
        <input type="checkbox" />
        {title}
      </label>
      <button onClick={handleClick} className="removeButton">
        Remove
      </button>
    </li>
  );
}

//Man kann sich die function handleClick sparen,
// denn wir haben nur eine Zeile Code.
// Wir können direkt schreiben:
// <button onClick={()=> onRemoveTodo(id)}>Remove</button>
