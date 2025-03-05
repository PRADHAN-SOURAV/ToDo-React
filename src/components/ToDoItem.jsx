function ToDoItem() {
  let todoItem ="Buy Milk";
  let todoDate = "4/10/2001";
  return (
    <div class="container">
    <div class="row">
      <div class="col-6">{todoItem}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
);
}
export default ToDoItem;
