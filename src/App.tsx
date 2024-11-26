import { FiClipboard } from "react-icons/fi";
import AddToDo from "./Components/addtodo";
import Navbar from "./Components/navbar";
import Todos from "./Components/todos";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>
        <FiClipboard
          size={16}
          style={{ color: "green", marginRight: "20px" }}
        />
        TODO REACT + TYPESCRIPT
        <FiClipboard size={16} style={{ color: "green", marginLeft: "20px" }} />
      </h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
