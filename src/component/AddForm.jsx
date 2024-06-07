import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Button from "@mui/material/Button";

export default function AddForm() {
  let [task, setTask] = useState("");
  const dispatch = useDispatch();

  let handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "flex-end" }}
            style={{ flex: "1" }}
          >
            <FormatListBulletedIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
            />
            <TextField
              id="input-with-sx"
              label="Add a Task"
              variant="standard"
              name="task"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              style={{ width: "100%" }}
            />
          </Box>

          <Button
            variant="contained"
            type="submit"
            style={{ width: "20%", margin: "0 0.7rem 0 0.7rem" }}
          >
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
