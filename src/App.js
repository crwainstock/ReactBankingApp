import React, { useState } from "react";
import "./App.css";

const starterItems = [
  {
    id: 1,
    name: "groceries",
    amount: -123,
  },
  {
    id: 2,
    name: "salary",
    amount: 1200,
  },
  {
    id: 3,
    name: "giraffe",
    amount: -574,
  },
];

function App() {
  const [items, setItems] = useState(starterItems);
  const [newItem, setNewItem] = useState({
    name: "",
    amount: 0,
  });
  const [id, setId] = useState(0);

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    let newObject = { ...newItem, [name]: value };
    setNewItem(newObject);
    console.log(newObject);
  }

  function addItem() {
    newItem.id = setId(() => id + 1);
    // newItem.id = items.length + 1;
    setItems((items) => [...items, newItem]);
  }

  function deleteItem(ID) {
    let newArray = items.filter((item) => item.id !== ID);
    setItems(newArray);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>My Banking App</h1>
        <div>
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
          <button onClick={addItem}>Add</button>
        </div>
        <div>
          <ul className="mt-4 list-group">
            {items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-item-center justify-content-between"
              >
                <span onClick={() => deleteItem(item.id)}>X</span>
                <span>
                  {item.name}
                  {item.id}
                </span>
                <span
                  className={item.amount > 0 ? "text-success" : "text-danger"}
                >
                  {item.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
