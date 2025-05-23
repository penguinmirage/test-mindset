import React, { useState, FormEvent, ChangeEvent } from "react";
import "./newTaskForm.css";

interface NewTaskFormProps {
  addItem: (text: string) => void;
  defaultLabel?: string;
}

const NewTaskForm: React.FC<NewTaskFormProps> = ({
  addItem,
  defaultLabel = "Empty task added",
}) => {
  const [label, setLabel] = useState<string>("");

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLabel(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (label.trim() !== "") {
      addItem(label);
      setLabel(""); // Reset input after adding the item
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="new-todo"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
      />
    </form>
  );
};

export default NewTaskForm;
