import React from "react";
import "./task.css";

interface TodoListItemProps {
  id: string;
  label: string;
  onToggleDone: (id: string) => void;
  done?: boolean;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  label,
  onToggleDone,
  done = false,
}) => {
  const handleToggleDone = (): void => {
    onToggleDone(id);
  };

  const classNames = `todo-list-item description ${done ? "done completed" : ""}`;

  return (
    <span className="todo-list">
      <input
        className="toggle"
        type="checkbox"
        onChange={handleToggleDone}
        checked={done}
      />
      <label className="todo-list-item" onClick={handleToggleDone}>
        <span className={classNames} data-testid="task-description">
          {label}
        </span>
      </label>
    </span>
  );
};

export default TodoListItem;