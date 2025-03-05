function ToDoItem({todoItem,todoDate}) {
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
export default ToDoItem;
