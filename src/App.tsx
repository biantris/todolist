import { TodoList } from "./TodoList";
import "./styles/TodoList.css";
import { useRef } from "react";
import { ActionButton } from "./ActionButton";

const App = () => {
  const componentToPrint = useRef(null);

  return (
    <div className="container">
      <TodoList componentToPrint={componentToPrint} />
      <ActionButton componentToPrint={componentToPrint} />
    </div>
  );
};

export default App;
