import "./App.css";
import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import FetctToDoItem from "./components/FetchToDoItem";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const todoItem =[
    {
      name: "Buy milk",
      dueDate: "04/10/2023"
    },
    {
      name: "Buy",
      dueDate: "04/10/2023"
    }
  ];
  return (
    <>
    <center className="todo-container">
      <AppName></AppName>
      <AppToDo />
      <FetctToDoItem item={todoItem}></FetctToDoItem>
    </center>
    </>
  );
}

export default App;
