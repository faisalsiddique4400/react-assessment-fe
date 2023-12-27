import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";
// import Policy from '../static/policy';
import "./style.scss";
import Utils from "../redux/utils";
// import Data from '../static/data';
import { useTranslation } from "react-i18next";

export const App = () => {
  const checkProtectedRoute = () => {
    const token = Utils.getCurrentToken();
    if (!token) return "/app";
    else return "/app";
  };
  const { i18n } = useTranslation();
  document.body.dir = i18n.language === "en" ? "ltr" : "ltr";
  return (
    // <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate replace to={checkProtectedRoute()} />}
        />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/app/*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
};
export default App;
