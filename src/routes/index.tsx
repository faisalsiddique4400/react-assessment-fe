import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "./authRoutes";
import { AppRoutes } from "./appRoutes";
// import Policy from '../static/policy';
import "./style.scss";
import Utils from "../redux/utils";
// import Data from '../static/data';
import { useTranslation } from "react-i18next";
import CreateMovies from "../pages/CreateMovie/CreateMovies";

export const App = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.language === "en" ? "ltr" : "ltr";
  return (
    // <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRoutes />} />
        <Route path="/createmovies" element={<CreateMovies />} />
        {/* <Route path="/privacy-policy" element={<Policy />} /> */}
        {/* <Route path="/data-integrity" element={<Data />} /> */}
      </Routes>
    </BrowserRouter>
    // </div>
  );
};
export default App;
