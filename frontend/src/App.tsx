import { Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/publiclayout";
import AppLayout from "./layouts/applayout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/init";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Discover from "./pages/Discover";
import Message from "./pages/Message";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Routes>
      {/* 🔓 Public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 🔒 Protected app pages */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/discover" element={<Discover />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
