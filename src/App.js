import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Components/Box";

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
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    amount: 0,
  });
  // const [id, setId] = useState(0);

  //This is where external data can be loaded - fetch from API, etc.
  useEffect(() => {
    setItems(starterItems);
  }, []);

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    let newObject = { ...newItem, [name]: value };
    setNewItem(newObject);
    console.log(newObject);
  }

  function addItem(itemCreated) {
    // newItem.id = setId(() => id + 1); NOT WORKING - can you do something with previousState?
    newItem.id = items.length + 1; //Not ideal. Need to change.
    setItems((items) => [...items, itemCreated]);
  }
  //ID is a local variable here. You can call it anything.
  function deleteItem(ID) {
    let newArray = items.filter((item) => item.id !== ID);
    setItems(newArray);
  }

  const income = items
    .filter((item) => item.amount > 0)
    .reduce((a, b) => a + +b.amount, 0);

  const expenses = items
    .filter((item) => item.amount < 0)
    .reduce((a, b) => a + +b.amount, 0);

  const balance = income + expenses;

  return (
    <div className="App">
      <div className="container">
        <h1>My Banking App</h1>

        <div className="row mb-4">
          <Box title="income" amountToShow={income} />
          <Box title="expenses" amountToShow={expenses} />
          <Box title="balance" amountToShow={balance} />
        </div>

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
                <span onClick={() => deleteItem(item.id)}>
                  <button className="btn btn-light pull-left">X</button>
                </span>
                <span>
                  {item.name}
                  {item.id}
                </span>
                <span
                  className={
                    item.amount > 0
                      ? "text-success pull-right"
                      : "text-danger pull-right"
                  }
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
