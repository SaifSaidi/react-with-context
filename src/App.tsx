import "./App.css";
import { ContextProvider } from "./provider";
import Counter from "./components/Counter";
import ButtonHandler from "./components/ButtonHandler";
import { useContext } from "react";
import { themeContext } from "./theme-provider";
import { Nav, Footer } from "./components/layout";
 
 
function App() {
  const [themeValue, ] = useContext(themeContext);
  
  return (<>
  
    <Nav />
    <main>
      <p>{themeValue} mode</p>
      <ContextProvider>
        <div className="card">
          <Counter />
          <ButtonHandler />
        </div>
      </ContextProvider>
    </main>
    <Footer />
  </>
  );
}

export default App;
