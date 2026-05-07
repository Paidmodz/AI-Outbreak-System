import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import {
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Heatmap from "./pages/Heatmap";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import History from "./pages/History";
import ChatBot from "./components/ChatBot";

import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {

  const location = useLocation();

  // Login page pe sidebar hide
  const hideSidebar =
    location.pathname === "/login";

  return (

    <div className="flex bg-[#071028] min-h-screen">

      {!hideSidebar && <Sidebar />}

      <div className="flex-1">

        <Routes>

          {/* Public Route */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Protected Routes */}

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />

          <Route
            path="/heatmap"
            element={
              <ProtectedRoute>
                <Heatmap />
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <Upload />
              </ProtectedRoute>
            }
          />

          <Route
            path="/history"
            element={
              <ProtectedRoute>
                <History />
              </ProtectedRoute>
            }
          />

        </Routes>

      </div>

    </div>

  );

}

function App() {

  return (

    <BrowserRouter>

      <Layout />

      <ToastContainer />

      <ChatBot />

    </BrowserRouter>

  );

}

export default App;