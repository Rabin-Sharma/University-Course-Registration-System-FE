import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Contents/Welcome";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import Courses from "./Pages/Contents/Courses";
import Login from "./Pages/Login";
import ProtectedRoute from "./Hooks/ProtectedRoute";
import Schedule from "./Pages/Contents/Schedule";
import Registration from "./Pages/Contents/Registration";

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
        <Route
          path="/schedule"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <ProtectedRoute>
              <Registration />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
