import { useDispatch } from "react-redux";
import { toggleCompleAsync, deleteTodoAsync } from "../redux/todoSlice";

interface Todo {
  id: number;
  title: string;
  completed: boolean
}

const TodoItem = ({ id, title, completed }: Todo) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleCompleAsync({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id }));
  };

  return (
    <div key={id}>
      <li
        className={`list-group-item ${completed && "list-group-item-success"}`}
      >
        <div className="d-flex justify-content-between">
          <span className="d-flex align-items-center">
            <input
              type="checkbox"
              className="mr-3"
              checked={completed}
              onClick={handleCheckboxClick}
            ></input>
            {title}
          </span>
          <button onClick={handleDeleteClick} className="btn btn-danger">
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
