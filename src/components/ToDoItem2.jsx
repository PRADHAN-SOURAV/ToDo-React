function ToDoItem2() {
  let todoItem ="Buy Milk";
  let todoDate = "4/10/2001";
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{todoItem}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem2;
