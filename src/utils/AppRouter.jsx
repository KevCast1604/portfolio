import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import HomePage from "./HomePage";
import ProjectDetails from "../components/sections/ProjectDetails";

const AppRoutes = () => {
  const navigate = useNavigate();

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
    window.scrollTo(0, 0);
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage onViewProject={handleViewProject} />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
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
