import { useState } from "react";
import "../App.css";

function Form({ onAdd }) {
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

  function handleSubmit() {
    //Could I create & add id to newItem here?

    //onAdd sends new item info back to parent
    onAdd(newItem);
    console.log(newItem);
    //clear input fields
    setNewItem({ name: "", amount: 0 });
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className="row d-flex justify-content-center">
        <div id="nameInput" className="col-4">
          <label forHTML="name" className="form-label">
            <h5>Name of Transaction</h5>
          </label>
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
          />
        </div>
        <div id="amountInput" className="col-4">
          <label forHTML="amount" className="form-label">
            <h5>Amount</h5>
          </label>
          <input
            type="number"
            name="amount"
            value={newItem.amount}
            onChange={handleChange}
          />
        </div>
        <div id="formSubmit" className="col-1 mt-auto">
          <button onClick={handleSubmit} className="btn btn-info btn-sm ">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
