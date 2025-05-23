import React from "react";

interface FilterButton {
  name: string;
  label: string;
}

interface TasksFilterProps {
  filter: string;
  onFilterChange: (filter: string) => void;
  onCleared: () => void;
}

const TasksFilter: React.FC<TasksFilterProps> = ({
  filter = "all",
  onFilterChange,
  onCleared,
}) => {
  const buttons: FilterButton[] = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Completed" },
  ];

  const renderedButtons = buttons.map(({ name, label }: FilterButton) => {
    const isActive = filter === name;
    const clazz = isActive ? "selected" : "btn-outline-secondary";

    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterChange(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <ul className="btn-group filters">
      <li>{renderedButtons}</li>
      <li className="clear-completed" onClick={onCleared}>
        Clear completed
      </li>
    </ul>
  );
};

export default TasksFilter;