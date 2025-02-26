import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Authentication/login"; // Updated path
import SignUp from "./Authentication/Signup"; // Added SignUp route
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />{" "}
        {/* Explicit route for /login */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
