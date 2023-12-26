/* eslint-disable no-unused-vars */
import React from "react";
import { Navigate, Route, Routes, redirect } from "react-router-dom";
import MoviesList from "../pages/moviesList";
import Utils from "../redux/utils";
import CreateMovies from "../pages/CreateMovie/CreateMovies";

export const AppRoutes = () => {
  console.log("ROUTES");
  const user = Utils.getCurrentUser();
  const menu = Utils.getCurrentMenu();
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      {/* <Route path="/createmovies" element={<CreateMovies />} /> */}
    </Routes>
  );
};
