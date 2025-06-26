import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Contents/Welcome";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import Courses from "./Pages/Contents/Courses";
import Login from "./Pages/Login";
import ProtectedRoute from "./Hooks/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
