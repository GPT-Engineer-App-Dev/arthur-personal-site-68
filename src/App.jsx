import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Biography from "./pages/Biography.jsx";
import Presidency from "./pages/Presidency.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/presidency" element={<Presidency />} />
      </Routes>
    </Router>
  );
}

export default App;
