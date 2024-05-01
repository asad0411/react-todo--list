import React from "react";
function TodoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="space-x-2 flex text-sm">
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p className="text-sky-500 dark:text-sky-400">{task.text}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
    </div>
    </div>
  );
}
export default TodoItem;
