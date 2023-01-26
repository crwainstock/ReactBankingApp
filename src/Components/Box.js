import "../App.css"; //I don't think we need this here, but the styling isn't working on the box components for some reason...

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
