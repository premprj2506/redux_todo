import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import "./TodoApp.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TodoApp() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // console.log(todos);

  let handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  let handleMarkAsDone = (id) => {
    dispatch(markAsDone(id));
  };

  return (
    <div className="todo row">
      <div className="todo-main col-6  offset-3">
        <h3 className=" todo-header"> Todo App </h3>
        <div style={{ padding: "0.5rem 1rem 1rem 1rem" }}>
          <AddForm />
          {todos.map((todo) => (
            <div key={todo.id} className="todo-task mb-3">
              <Checkbox {...label} onClick={() => handleMarkAsDone(todo.id)} />

              <span
                style={
                  todo.isDone === true
                    ? {
                        color: "red",
                        textDecoration: "line-through",
                        flex: "1",
                      }
                    : { flex: "1" }
                }
              >
                {todo.task}
              </span>

              <DeleteIcon onClick={() => handleDelete(todo.id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
