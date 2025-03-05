import ToDoItem from "./ToDoItem";
const FetctToDoItem = ({item}) =>{
  return(
    <>
    <div className="item-container">
    {item.map((items) =>(
      <ToDoItem todoItem={items.name} todoDate={items.dueDate}></ToDoItem>
    ))}
    </div>
    </>
  );
}
export default FetctToDoItem;