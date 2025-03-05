import "./App.css";
import AppName from "./components/AppName";
import AppToDo from "./components/AppToDo";
import ToDoItem from "./components/ToDoItem";
import ToDoItem2 from "./components/ToDoItem2";
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppToDo />
      <div className="item-container">
      <ToDoItem />
      <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;
