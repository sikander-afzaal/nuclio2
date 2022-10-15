import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
