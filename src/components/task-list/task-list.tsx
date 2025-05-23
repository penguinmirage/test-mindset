import React from "react";
import Task from "../task";
import "./task-list.css";

interface TodoItem {
  id: string;
  label: string;
  done: boolean;
}

interface TaskListProps {
  todos: TodoItem[];
  onToggleDone: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  todos,
  onToggleDone,
}) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <Task
          {...itemProps}
          onToggleDone={() => onToggleDone(id)}
          id={id}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;