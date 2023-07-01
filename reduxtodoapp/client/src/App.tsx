import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./components/add-todo-form";
import TodoList from "./components/todo-list";
import TotalCompleteItems from "./components/total-complete-Items";

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

export default App;
