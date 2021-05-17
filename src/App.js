import "./App.css";
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import RouterComonent from "./Components/Router";

function App() {
  return (
    <div className="app">
      <Nav />
      <div style={{display:"flex"} }>
      <Sidebar />
      <RouterComonent/>
      </div>
    </div>
  );
}

export default App;
