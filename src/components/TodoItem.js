//import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({
  id,
  isChecked,
  title,
  onRemoveTodo,
  onToggleItem,
}) {
  function handleClick() {
    onRemoveTodo(id);
  }

  // function handleChange() {
  //   setIsDone(!isDone);
  // }
  // =>WEnn ich das State ändere,
  //wird die komplette TodoItem neu gerendert

  return (
    <li>
      <label className={isChecked ? "strike-through" : ""}>
        <input
          onChange={() => onToggleItem(id)}
          type="checkbox"
          checked={isChecked}
        />
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
