import { useState } from "react";
import "../App.css";

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
    <div className="container">
      <div className="row">
        <div id="nameInput" className="col">
          <label forHTML="name" className="form-label">
            Name of Transaction
          </label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
          />
        </div>
        <div id="amountInput" className="col">
          <label forHTML="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={newItem.amount}
            onChange={handleChange}
          />
        </div>
        <button onClick={() => onAdd(newItem)} className="btn btn-info">
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
