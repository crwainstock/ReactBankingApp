import { useState } from "react";

function Form({ onAdd, searchTerm, setNewSearchTerm, setItems }) {
  const [newItem, setNewItem] = useState({
    name: "",
    amount: 0,
  });

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    let newObject = { ...newItem, [name]: value };
    setNewItem(newObject);

    console.log(newObject);
  }

  return (
    <div className="d-flex mt-4">
      <input
        type="text"
        name="name"
        value={newItem.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        value={newItem.amount}
        onChange={handleChange}
      />
      <button onClick={() => onAdd(newItem)} className="btn btn-info">
        Add
      </button>
    </div>
  );
}

export default Form;
