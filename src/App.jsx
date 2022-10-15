import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import About from "./Pages/About/About";
import Change from "./Pages/Change/Change";
import Team from "./Pages/Team/Team";
import TeamDetail from "./Pages/TeamDetail/TeamDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing />} path="/" />
        {/* <Route element={<About />} path="/about" />
        <Route element={<Change />} path="/change" />
        <Route element={<Team />} path="/team" /> */}
        {/* <Route element={<TeamDetail />} path="/:name" /> */}
      </Routes>
    </div>
  );
}

export default App;
