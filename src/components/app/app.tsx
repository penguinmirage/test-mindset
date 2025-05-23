import React, { useState } from "react";
import AppHeader from "../app-header/";
import TaskList from "../task-list";
import TasksFilter from "../tasks-filter/taskFilter";
import NewTaskForm from "../new-task-form";
import Footer from "../app-footer";
import "./app.css";

interface TodoItem {
  label: string;
  done: boolean;
  id: string;
}

interface AppProps {
  initialTodoData?: TodoItem[];
  initialFilter?: string;
}

const App: React.FC<AppProps> = ({
  initialTodoData = [],
  initialFilter = "all",
}) => {
  const [todoData, setTodoData] = useState<TodoItem[]>(initialTodoData);
  const [filter, setFilter] = useState<string>(initialFilter);

  const createTodoItem = (label: string): TodoItem => ({
    label,
    done: false,
    id: Date.now().toString(),
  });

  const addItem = (text: string): void => {
    const newItem = createTodoItem(text);
    setTodoData((todoData) => [...todoData, newItem]);
  };

  const onToggleDone = (id: string): void => {
    setTodoData((todoData) =>
      todoData.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const filterItems = (items: TodoItem[], filter: string): TodoItem[] => {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const onFilterChange = (newFilter: string): void => setFilter(newFilter);

  const onCleared = (): void =>
    setTodoData((todoData) => todoData.filter((item) => !item.done));

  const visibleItems = filterItems(todoData, filter);
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className="todoapp">
      <AppHeader />
      <NewTaskForm addItem={addItem} />
      <TaskList todos={visibleItems} onToggleDone={onToggleDone} />
      <div className="footer">
        <Footer count={todoCount} />
        <TasksFilter
          filter={filter}
          onFilterChange={onFilterChange}
          onCleared={onCleared}
        />
      </div>
    </div>
  );
};

export default App;