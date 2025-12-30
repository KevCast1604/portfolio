import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import HomePage from "./HomePage";
import ProjectDetails from "../components/sections/ProjectDetails";
import LoadingScreen from "../components/ui/LoadingScreen";

const MIN_LOADING_TIME = 1200;

const AppRoutes = () => {
  const navigate = useNavigate();

  const [appReady, setAppReady] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

  const loading = !(appReady && minTimePassed);

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
    window.scrollTo(0, 0);
  };

  // ⏱️ Tiempo mínimo
  useEffect(() => {
    const t = setTimeout(() => setMinTimePassed(true), MIN_LOADING_TIME);
    return () => clearTimeout(t);
  }, []);

  // ✅ App lista (por ahora inmediata)
  useEffect(() => {
    setAppReady(true);
  }, []);

  return (
    <>
      <LoadingScreen
        show={loading}
        text="Loading..."
        duration={MIN_LOADING_TIME}
      />

      {!loading && (
        <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
          <Routes>
            <Route
              path="/"
              element={<HomePage onViewProject={handleViewProject} />}
            />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      )}
    </>
  );
};

const AppRouter = () => (
  <div className="bg-gray-900 min-h-screen">
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </div>
);

export default AppRouter;
