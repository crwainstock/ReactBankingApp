function Box({ title, amountToShow }) {
  return (
    <div className="col">
      <div className="card card-body shadow border-0">
        <h4>{title}</h4>
        <h5 className={amountToShow > 0 ? "text-success" : "text-danger"}>
          {amountToShow}
        </h5>
      </div>
    </div>
  );
}

export default Box;
