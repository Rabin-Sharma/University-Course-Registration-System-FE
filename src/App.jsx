import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Login2 from "./Pages/Login2";
import Welcome from "./Pages/Contents/Welcome";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import Courses from "./Pages/Contents/Courses";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Welcome />} />
        <Route path="/courses" element={<Courses />} />
      </Route>
    </Routes>
  );
}

export default App;
