import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage.jsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/Projeto1">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/TaskPage" element={<TaskPage />} />
    </Routes>
  </BrowserRouter>
);
