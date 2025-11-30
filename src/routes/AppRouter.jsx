import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Project from "../pages/Project";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Project />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
