import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "./Components/Box";
import Form from "./Components/Form";

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
  const [searchTerm, setSearchTerm] = useState("");

  const [id, setId] = useState(4);

  //This is where external data can be loaded - fetch from API, etc.
  useEffect(() => {
    setItems(starterItems);
  }, []);

  function addItem(itemCreated) {
    // newItem.id = setId(() => id + 1); NOT WORKING - can you do something with previousState?
    // itemCreated.id = items.length + 1; //Not ideal. Need to change.
    createId(); //incrementing id
    console.log(id);
    setItems((items) => [...items, itemCreated]);
  }

  function createId() {
    setId(id + 1);
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
          <Box title="Income" amountToShow={income} />
          <Box title="Expenses" amountToShow={expenses} />
          <Box title="Balance" amountToShow={balance} />
        </div>

        <Form
          onAdd={addItem}
          searchTerm={searchTerm}
          setNewSearchTerm={setSearchTerm}
        />
        <div>
          <div className="container">
            <div
              id="searchBar"
              className="row d-flex justify-content-center w-50 p-3"
            >
              <input
                type="text"
                placeholder="Search ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ul className="mt-4 list-group">
              {items
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
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
                          ? "positive pull-right"
                          : "negative pull-right"
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
    </div>
  );
}

export default App;
