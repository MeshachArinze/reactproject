import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createSelector } from "reselect";

const selectTodos = (state: { todos: any; }) => state.todos;

const TotalCompleteItems = () => {
  // const todos = useSelector<RootState, object[]>((state) =>
  //   state.todos.itemList.filter((todo: { completed: boolean; }) => todo.completed === true)
  // );

  const selectCompletedTodos = createSelector([selectTodos], (todos) =>
    todos.filter.itemList(
      (todo: { completed: boolean }) => todo.completed === true
    )
  );

  return <h4 className="mt-3">Total complete items: {selectCompletedTodos.length}</h4>;
};

export default TotalCompleteItems;
