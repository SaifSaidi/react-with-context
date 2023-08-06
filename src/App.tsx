 
import "./App.css";
import { ContextProvider } from "./provider";
import Counter from "./components/Counter";
import ButtonHandler from "./components/ButtonHandler";


function App() {
  return (
    <ContextProvider>
      <div className="card">
        <Counter />
        <ButtonHandler />
      </div>
    </ContextProvider>
  );
}

export default App;
