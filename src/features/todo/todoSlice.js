import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state of the todo slice, containing an empty array of todos
const initialState = {
  todos: [],
};

// Creating a slice for todos with createSlice function
export const todoSlice = createSlice({
  name: "todo", // Name of the slice
  initialState, // Initial state of the slice
  reducers: {
    // Reducer for adding a new todo
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(), // Generating a unique ID for the new todo
        task: action.payload, // Setting the task from the action payload
        isDone: false, // Initial state of the task is not done
      };
      state.todos.push(newTodo); // Adding the new todo to the state
    },
    // Reducer for deleting a todo
    deleteTodo: (state, action) => {
      // Filtering out the todo with the specified ID from the state
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Reducer for marking a todo as done
    markAsDone: (state, action) => {
      // Mapping through the todos to find the one with the specified ID
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone === true ? (todo.isDone = false) : (todo.isDone = true); // Setting the isDone property to true
        }
        return todo; // Returning the updated todo
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

// Exporting the reducer to be used in the store
export default todoSlice.reducer;
