import { Provider } from "react-redux";
import { store } from "./app/store";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoApp />
      </Provider>
    </>
  );
}

export default App;
