import { Fragment } from "react"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Navigation />
      <Routes>
        <Route path="/home" element={<ProtectedRoute user={false}>
          <Home/>
        </ProtectedRoute>} />

        <Route path="user">
          <Route index element={<h1>Users</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="skill" element={<h1>Skill</h1>} />
        </Route>

        <Route path="*" element={<h1>404 Not found</h1>} />
      </Routes>
    </>
  );
}

export default App