import { useEffect } from "react";
import TodoItem from "./todo-item";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import { RootState } from "../redux/store";


type Todo = {
  id: number,
  title: string,
  completed: boolean
} 

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector<RootState>((state) => state.todos) as object;

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {Array.from(Object.values(todos).map((todo:Todo, index) => (
        <TodoItem key={index}  {...todo} />
      )))}
    </ul>
  );
};

export default TodoList;
